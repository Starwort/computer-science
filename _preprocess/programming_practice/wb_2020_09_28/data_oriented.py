def addOccupant(room, occupantIn):
    if len(room[2]) < room[1]:
        room[2].append(occupantIn)
        occupantIn[2] += 1
    else:
        occupantIn[2] -= 1
        return
    if room[3] == True:
        occupantIn[2] += 1
    else:
        occupantIn[2] -= 1
    room[3] = False


def removeOccupant(room, occupantOut):
    index = -1
    for pos, occupant in enumerate(room[2]):
        if occupantOut[1] == occupant[1]:
            index = pos
    if index != -1:
        del room[2][index]


def takeFeedback(manager, customer):
    if customer[2] > 0:
        print(manager + " says:\n" + customer[1] + " was happy with their stay!")
    elif customer[2] < 0:
        print(manager + " says:\n" + customer[1] + " was unhappy with their stay!")
    else:
        print(manager + " says:\n" + customer[1] + " found their stay ok.")


def cleanRooms(cleaner, hotel):
    for room in hotel:
        if room[2] == []:
            room[3] = True
            print(cleaner + " cleaned Room " + str(room[0]))


def checkIn(receptionist, hotel, customer):
    room = hotel[customer[0] - 1]
    addOccupant(room, customer)
    print(receptionist + " checked in " + customer[1])


def checkOut(receptionist, hotel, customer, manager):
    room = hotel[customer[0] - 1]
    removeOccupant(room, customer)
    print(receptionist + " checked out " + customer[1])
    takeFeedback(manager, customer)


def main():
    room1 = [1, 1, [], False]
    room2 = [2, 2, [], True]
    room3 = [3, 1, [], False]
    hotel = [room1, room2, room3]
    customer1 = [1, "Mrs. White", 0]
    customer2 = [2, "Mr. Green", 0]
    customer3 = [2, "Miss. Scarlett", 0]
    customer4 = [3, "Mrs. Peacock", 0]
    customer5 = [2, "Prof. Plum", 0]
    customer6 = [3, "Col. Mustard", 0]
    receptionist = "Jane"
    cleaner = "Michael"
    manager = "Janhavi"

    checkIn(receptionist, hotel, customer1)
    checkIn(receptionist, hotel, customer2)
    checkIn(receptionist, hotel, customer3)
    checkOut(receptionist, hotel, customer1, manager)

    cleanRooms(cleaner, hotel)

    checkIn(receptionist, hotel, customer4)
    checkOut(receptionist, hotel, customer4, manager)
    checkIn(receptionist, hotel, customer5)
    checkOut(receptionist, hotel, customer5, manager)
    checkOut(receptionist, hotel, customer2, manager)
    checkOut(receptionist, hotel, customer3, manager)

    cleanRooms(cleaner, hotel)

    checkIn(receptionist, hotel, customer6)
    checkOut(receptionist, hotel, customer6, manager)
    input()


if __name__ == "__main__":
    main()

