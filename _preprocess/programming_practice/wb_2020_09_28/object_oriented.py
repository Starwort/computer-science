"""This code is a system that manages a hotel and its staff. Customers are
checked in and out of their rooms, and leave feedback depending on how their
stay was (if they are successfully checked in or their room is clean they become
happier with their stay, and if their room is overbooked or unclean they become
less happy with their stay). Recreate the non-encapsulated code so that it keeps
the same functionality but is properly encapsulated. There should be classes for
Hotel, Room, Customer, Manager, Receptionist and Cleaner. The manager should be
responsible for processing feedback; the cleaner should be responsible for
cleaning rooms; the receptionist should be responsible for checking customers in
and out of their rooms. All attributes should be made private (although you may
add any methods that you think are helpful). You may use the provided
encapsulated code, which provides a converted main method and constructors for
each class that does not need to be altered. (15 marks)
"""
import typing


class Person:
    def __init__(self, name: str) -> None:
        self.name = name

    def __hash__(self) -> int:
        return hash(self.name + "-" + self.__class__.__name__)

    def __repr__(self) -> str:
        return f"{self.__class__.__name__}({self.name!r})"

    def __eq__(self, other: object) -> bool:
        if isinstance(other, Person):
            return self.name == other.name
        return NotImplemented


class Customer(Person):
    def __init__(self, room_booking: int, name: str, feedback: int = 0) -> None:
        super().__init__(name)
        self._room_booking = room_booking
        self.feedback = feedback

    @property
    def room_booking(self) -> int:
        return self._room_booking - 1

    @room_booking.setter
    def room_booking(self, value: int) -> None:
        self._room_booking = value

    def __repr__(self) -> str:
        return f"{self.__class__.__name__}({self._room_booking}, {self.name!r}, {self.feedback})"


class Room:
    def __init__(self, number: int, size: int, clean: bool) -> None:
        self.number = number
        self.size = size
        self.occupants: typing.Set[Customer] = set()
        self.clean = clean

    def add_occupant(self, customer: Customer) -> None:
        if len(self.occupants) < self.size:
            self.occupants.add(customer)
            customer.feedback += 1
        else:
            customer.feedback -= 1
            return
        if self.clean:
            customer.feedback += 1
        else:
            customer.feedback -= 1
        self.clean = False

    def remove_occupant(self, customer: Customer) -> None:
        self.occupants.discard(customer)


class Hotel:
    def __init__(self, *rooms: Room) -> None:
        self.rooms = list(rooms)


class Manager(Person):
    def take_feedback(self, customer: Customer) -> None:
        if customer.feedback > 0:
            print(f"{self.name} says:\n{customer.name} was happy with their stay!")
        elif customer.feedback < 0:
            print(f"{self.name} says:\n{customer.name} was unhappy with their stay!")
        else:
            print(f"{self.name} says:\n{customer.name} found their stay ok.")


class Cleaner(Person):
    def clean_rooms(self, hotel: Hotel) -> None:
        for room in hotel.rooms:
            if not room.occupants:
                room.clean = True
                print(f"{self.name} cleaned room {room.number}")


class Receptionist(Person):
    def check_in(self, hotel: Hotel, customer: Customer) -> None:
        room = hotel.rooms[customer.room_booking]
        room.add_occupant(customer)
        print(self.name + " checked in " + customer.name)

    def check_out(self, hotel: Hotel, customer: Customer, manager: Manager) -> None:
        room = hotel.rooms[customer.room_booking]
        room.remove_occupant(customer)
        print(self.name + " checked out " + customer.name)
        manager.take_feedback(customer)


def main():
    room1 = Room(1, 1, False)
    room2 = Room(2, 2, True)
    room3 = Room(3, 1, False)
    hotel = Hotel(room1, room2, room3)
    customer1 = Customer(1, "Mrs. White")
    customer2 = Customer(2, "Mr. Green")
    customer3 = Customer(2, "Miss. Scarlett")
    customer4 = Customer(3, "Mrs. Peacock")
    customer5 = Customer(2, "Prof. Plum")
    customer6 = Customer(3, "Col. Mustard")
    receptionist = Receptionist("Jane")
    cleaner = Cleaner("Michael")
    manager = Manager("Janhavi")

    receptionist.check_in(hotel, customer1)
    receptionist.check_in(hotel, customer2)
    receptionist.check_in(hotel, customer3)
    receptionist.check_out(hotel, customer1, manager)

    cleaner.clean_rooms(hotel)

    receptionist.check_in(hotel, customer4)
    receptionist.check_out(hotel, customer4, manager)
    receptionist.check_in(hotel, customer5)
    receptionist.check_out(hotel, customer5, manager)
    receptionist.check_out(hotel, customer2, manager)
    receptionist.check_out(hotel, customer3, manager)

    cleaner.clean_rooms(hotel)

    receptionist.check_in(hotel, customer6)
    receptionist.check_out(hotel, customer6, manager)
    input()


if __name__ == "__main__":
    main()

