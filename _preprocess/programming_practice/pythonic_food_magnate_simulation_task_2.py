import math
import random
import typing
from random import seed


class Household:
    _next_id = 1

    def __init__(self, x: int, y: int) -> None:
        self._x = x
        self._y = y
        self._eat_out_chance = random.random()
        self._id = self.__class__._next_id
        self.__class__._next_id += 1

    @property
    def details(self) -> str:
        return (
            f"{self._id}     Coordinates: ({self.x}, {self.y})   "
            f"  Eat out probability: {self.chance_eat_out}"
        )

    @property
    def chance_eat_out(self) -> float:
        return self._eat_out_chance

    @property
    def x(self) -> int:
        return self._x

    @property
    def y(self) -> int:
        return self._y


class Settlement:
    def __init__(self) -> None:
        self._x_size = 3
        self._y_size = 3
        self._initial_households = 8
        self._households: typing.List[Household] = []
        self._create_households()

    @property
    def no_households(self) -> int:
        return len(self._households)

    @property
    def x_size(self) -> int:
        return self._x_size

    @property
    def y_size(self) -> int:
        return self._y_size

    def get_random_location(self) -> typing.Tuple[int, int]:
        while True:
            x = random.randint(0, self.x_size - 1)
            y = random.randint(0, self.y_size - 1)
            for household in self._households:
                if (household.x, household.y) == (x, y):
                    break
            else:
                return x, y

    def _create_households(self) -> None:
        for _ in range(self._initial_households):
            self.add_household()

    def add_household(self) -> None:
        x, y = self.get_random_location()
        self._households.append(Household(x, y))

    def display_households(self) -> None:
        print()
        print("**********************************")
        print("*** Details of all households: ***")
        print("**********************************")
        print()

        for household in self._households:
            print(household.details)

        print()

    def household_eats_out(self, household_no: int) -> typing.Tuple[bool, int, int]:
        simulated = random.random()
        x = self._households[household_no].x
        y = self._households[household_no].y

        return (
            simulated < self._households[household_no].chance_eat_out,
            x,
            y,
        )


class LargeSettlement(Settlement):
    def __init__(
        self, extra_x_size: int, extra_y_size: int, extra_households: int
    ) -> None:
        super().__init__()
        self._x_size += extra_x_size
        self._y_size += extra_y_size
        self._initial_households += extra_households
        for _ in range(1, extra_households + 1):
            self.add_household()


class Outlet:
    def __init__(self, x: int, y: int, max_base_capacity: int) -> None:
        self._x = x
        self._y = y
        self._capacity = max_base_capacity * 3 // 5
        self._max_capacity = (
            max_base_capacity + random.randint(0, 49) - random.randint(0, 49)
        )
        self._daily_costs = max_base_capacity * 0.2 + self.capacity * 0.5 + 100
        self.new_day()

    @property
    def x(self) -> int:
        return self._x

    @property
    def y(self) -> int:
        return self._y

    @property
    def capacity(self) -> int:
        return self._capacity

    def alter_daily_cost(self, net_change: int) -> None:
        self._daily_costs += net_change

    def alter_capacity(self, net_change: int) -> int:
        old_capacity = self.capacity
        self._capacity += net_change
        if self.capacity > self._max_capacity:
            self._capacity = self._max_capacity
            return self._max_capacity - old_capacity
        elif self.capacity < 0:
            self._capacity = 0
        self._daily_costs = self._max_capacity * 0.2 + self.capacity * 0.5 + 100
        return net_change

    def increment_visits(self) -> None:
        self._visits_today += 1

    def new_day(self) -> None:
        self._visits_today = 0

    def calculate_daily_profit_loss(self, avg_cost: float, avg_price: float) -> float:
        return (avg_price - avg_cost) * self._visits_today - self._daily_costs

    @property
    def details(self):
        return (
            f"Coordinates: ({self.x}, {self.y})     Capacity: "
            f"{self.capacity}      Maximum Capacity: "
            f"{self._max_capacity}      Daily Costs: "
            f"{self._daily_costs}      Visits today: "
            f"{self._visits_today}"
        )


class Company:
    def __init__(
        self,
        name: str,
        category: str,
        balance: float,
        x: int,
        y: int,
        fuel_cost_per_unit: float,
        delivery_base_cost: float,
    ) -> None:
        self._outlets: typing.List[Outlet] = []
        self._family_outlet_cost = 1000
        self._fast_food_outlet_cost = 2000
        self._named_chef_outlet_cost = 15000
        self._family_outlet_capacity = 150
        self._fast_food_outlet_capacity = 200
        self._named_chef_outlet_capacity = 50
        self._name = name
        self._category = category
        self._balance = balance
        self._fuel_cost = fuel_cost_per_unit
        self._delivery_base_cost = delivery_base_cost
        self._reputation = 100.0
        self._daily_costs: float = 100
        if self._category == "fast food":
            self._avg_cost: float = 5
            self._avg_price = 10
            self._reputation += random.random() * 10 - 8
        elif self._category == "family":
            self._avg_cost = 12
            self._avg_price = 14
            self._reputation += random.random() * 30 - 5
        else:
            self._avg_cost = 20
            self._avg_price = 40
            self._reputation += random.random() * 50
        self.open_outlet(x, y)

    @property
    def name(self) -> str:
        return self._name

    @property
    def no_outlets(self) -> int:
        return len(self._outlets)

    @property
    def reputation(self) -> float:
        return self._reputation

    def alter_daily_cost(self, net_change: float) -> None:
        self._daily_costs += net_change

    def alter_avg_cost(self, net_change: float) -> None:
        self._avg_cost += net_change

    def alter_fuel_cost(self, net_change: float) -> None:
        self._fuel_cost += net_change

    def alter_reputation(self, net_change: float) -> None:
        self._reputation += net_change

    def new_day(self) -> None:
        for outlet in self._outlets:
            outlet.new_day()

    def add_visit_to_nearest_outlet(self, x: int, y: int):
        nearest_outlet = self._outlets[0]
        distance_to_nearest = (
            (nearest_outlet.x - x) ** 2 + (nearest_outlet.y - y) ** 2
        ) ** (1 / 2)
        for outlet in self._outlets[1:]:
            distance_to_current = ((outlet.x - x) ** 2 + (outlet.y - y) ** 2) ** (1 / 2)
            if distance_to_current < distance_to_nearest:
                distance_to_nearest = distance_to_current
                nearest_outlet = outlet
        nearest_outlet.increment_visits()

    @property
    def details(self):
        details = (
            f"Name: {self.name}\nType of business: {self._category}\n"
            f"Current balance: {self._balance}\nAverage cost per meal: "
            f"{self._avg_cost}\nAverage price per meal: "
            f"{self._avg_price}\nDaily costs: {self._daily_costs}\n"
            f"Delivery costs: {self.calculate_delivery_cost()}\n"
            f"Reputation: {self.reputation}\n\n"
            f"Number of outlets: {self.no_outlets}\nOutlets:"
        )
        for no, outlet in enumerate(self._outlets, start=1):
            details += f"\n{no}. {outlet.details}"
        return details

    def process_day_end(self) -> str:
        profit_loss_all = 0.0
        delivery_cost = self._delivery_base_cost
        if self.no_outlets > 1:
            delivery_cost += self.calculate_delivery_cost()
        details = (
            f"Daily costs for company: {self._daily_costs}\nCost "
            f"for delivering produce to outlets: {delivery_cost}\n"
        )
        for no, outlet in enumerate(self._outlets, start=1):
            profit_loss_this = outlet.calculate_daily_profit_loss(
                self._avg_cost, self._avg_price
            )
            details += f"Outlet {no} profit/loss: {profit_loss_this}\n"
            profit_loss_all += profit_loss_this
        details += f"Previous balance for company: {self._balance}\n"
        self._balance += profit_loss_all - self._daily_costs - delivery_cost
        details += f"New balance for company: {self._balance}"
        return details

    def close_outlet(self, id: int) -> bool:
        self._outlets.pop(id)
        return self.no_outlets == 0

    def expand_outlet(self, id: int) -> None:
        change = int(input("Enter amount you would like to expand the capacity by: "))
        result = self._outlets[id].alter_capacity(change)
        if result == change:
            print("Capacity adjusted.")
        else:
            print("Only some of that capacity added, outlet now at maximum capacity.")

    def open_outlet(self, x: int, y: int) -> None:
        if self._category == "fast food":
            self._balance -= self._fast_food_outlet_cost
            capacity = self._fast_food_outlet_capacity
        elif self._category == "family":
            self._balance -= self._family_outlet_cost
            capacity = self._family_outlet_capacity
        else:
            self._balance -= self._named_chef_outlet_cost
            capacity = self._named_chef_outlet_capacity
        self._outlets.append(Outlet(x, y, capacity))

    @staticmethod
    def _get_distance_between_two_outlets(outlet_1: Outlet, outlet_2: Outlet) -> float:
        return ((outlet_1.x - outlet_2.x) ** 2 + (outlet_1.y - outlet_2.y) ** 2) ** (
            1 / 2
        )

    def calculate_delivery_cost(self) -> float:
        total_distance = 0.0
        for outlet_1, outlet_2 in zip(self._outlets, self._outlets[1:]):
            total_distance += self._get_distance_between_two_outlets(outlet_1, outlet_2)
        return total_distance * self._fuel_cost


class Simulation:
    def __init__(self) -> None:
        self._companies: typing.List[Company] = []
        self._fuel_cost = 0.0098
        self._delivery_base_cost = 100
        choice = input(
            "Enter L for a large settlement, anything else for a "
            "normal size settlement: "
        ).upper()[:1]
        if choice == "L":
            extra_x = int(
                input("Enter additional amount to add to X size of settlement: ")
            )
            extra_y = int(
                input("Enter additional amount to add to Y size of settlement: ")
            )
            extra_households = int(
                input("Enter additional number of households to add to settlement: ")
            )
            self._simulation_settlement: Settlement = LargeSettlement(
                extra_x, extra_y, extra_households
            )
        else:
            self._simulation_settlement = Settlement()
        choice = input(
            "Enter D for default companies, anything else to add your "
            "own start companies: "
        ).upper()[0]
        if choice == "D":
            self._no_companies = 3
            company_1 = Company(
                "AQA Burgers",
                "fast food",
                100000,
                200,
                203,
                self._fuel_cost,
                self._delivery_base_cost,
            )
            self._companies.append(company_1)
            company_1.open_outlet(300, 987)
            company_1.open_outlet(500, 500)
            company_1.open_outlet(305, 303)
            company_1.open_outlet(874, 456)
            company_1.open_outlet(23, 408)
            company_1.open_outlet(412, 318)
            company_2 = Company(
                "Ben Thor Cuisine",
                "named chef",
                100400,
                390,
                800,
                self._fuel_cost,
                self._delivery_base_cost,
            )
            self._companies.append(company_2)
            company_3 = Company(
                "Paltry Poultry",
                "fast food",
                25000,
                800,
                390,
                self._fuel_cost,
                self._delivery_base_cost,
            )
            self._companies.append(company_3)
            company_3.open_outlet(400, 390)
            company_3.open_outlet(820, 370)
            company_3.open_outlet(800, 600)
        else:
            self._no_companies = int(
                input("Enter number of companies that exist at start of simulation: ")
            )
            for _ in range(self._no_companies):
                self.add_company()

    @staticmethod
    def display_menu() -> None:
        print()
        print("*********************************")
        print("**********    MENU     **********")
        print("*********************************")
        print("1. Display details of households")
        print("2. Display details of companies")
        print("3. Modify company")
        print("4. Add new company")
        print("6. Advance to next day")
        print("Q. Quit")
        print()
        print("Enter your choice: ", end="")

    def _display_companies_at_day_end(self) -> None:
        print()
        print("**********************")
        print("***** Companies: *****")
        print("**********************")
        print()
        for company in self._companies:
            print(company.name)
            print()
            print(company.process_day_end())
            print()

    def _process_add_households_event(self) -> None:
        no_new_households = random.randint(1, 4)
        for _ in range(no_new_households):
            self._simulation_settlement.add_household()
        print(f"{no_new_households} new households have been added to the settlement")

    def _process_cost_of_fuel_change_event(self) -> None:
        fuel_cost_change = random.randint(1, 9) / 10
        up = not random.randint(0, 1)
        company = random.choice(self._companies)
        if up:
            print(
                f"The cost of fuel has gone up by {fuel_cost_change} "
                f"for {company.name}"
            )
        else:
            print(
                f"The cost of fuel has gone down by {fuel_cost_change} "
                f"for {company.name}"
            )
            fuel_cost_change *= -1
        company.alter_fuel_cost(fuel_cost_change)

    def _process_reputation_change_event(self) -> None:
        reputation_change = random.randint(1, 9) / 10
        up = not random.randint(0, 1)
        company = random.choice(self._companies)
        if up:
            print(
                f"The reputation of {company.name} has gone up by", reputation_change,
            )
        else:
            print(
                f"The reputation of {company.name} has gone down by", reputation_change,
            )
            reputation_change *= -1
        company.alter_reputation(reputation_change)

    def _process_cost_change_event(self) -> None:
        cost_to_change = random.choice(("daily", "meal"))
        up = not random.randint(0, 1)
        company = random.choice(self._companies)
        if cost_to_change == "daily":
            amount = random.randint(1, 19) / 10
            if up:
                print(
                    f"The daily costs for {company.name} have gone up " f"by {amount}"
                )
            else:
                print(
                    f"The daily costs for {company.name} have gone down " f"by {amount}"
                )
                amount *= -1
            company.alter_daily_cost(amount)
        else:
            amount = random.randint(1, 19) / 10
            if up:
                print(
                    f"The average meal cost for {company.name} has "
                    f"gone up by {amount}"
                )
            else:
                print(
                    f"The average meal cost for {company.name} has "
                    f"gone down by {amount}"
                )
                amount *= -1
            company.alter_avg_cost(amount)

    def _display_events_at_day_end(self):
        print()
        print("***********************")
        print("*****   Events:   *****")
        print("***********************")
        print()
        had_event = False
        if random.random() < 0.25:
            if random.random() < 0.25:
                had_event = True
                self._process_add_households_event()
            if random.random() < 0.5:
                had_event = True
                self._process_cost_of_fuel_change_event()
            if random.random() < 0.5:
                had_event = True
                self._process_reputation_change_event()
            if random.random() >= 0.5:
                had_event = True
                self._process_cost_change_event()
        if not had_event:
            print("No events")

    def process_day_end(self):
        total_reputation: float = 0
        cumulative_reputations: typing.List[float] = []
        for company in self._companies:
            company.new_day()
            total_reputation += company.reputation
            cumulative_reputations.append(total_reputation)
        for household_no in range(self._simulation_settlement.no_households):
            (eats_out, x, y,) = self._simulation_settlement.household_eats_out(
                household_no
            )
            if eats_out:
                # picked = random.random() * total_reputation
                picked = random.randint(1, int(total_reputation))  # ???
                for company, max_picked in zip(self._companies, cumulative_reputations):
                    if picked < max_picked:
                        company.add_visit_to_nearest_outlet(x, y)
                        break
        self._display_companies_at_day_end()
        self._display_events_at_day_end()

    def add_company(self):
        company_name = input("Enter a name for the company: ")
        balance = int(input("Enter the starting balance for the company: "))
        company_type = ""
        while company_type not in ["1", "2", "3"]:
            company_type = input(
                "Enter 1 for a fast food company, 2 for a family "
                "company or 3 for a named chef company: "
            )
        company_type = {"1": "fast food", "2": "family", "3": "named chef",}[
            company_type
        ]
        x, y = self._simulation_settlement.get_random_location()
        self._companies.append(
            Company(
                company_name,
                company_type,
                balance,
                x,
                y,
                self._fuel_cost,
                self._delivery_base_cost,
            )
        )

    def company_index(self, company_name: str) -> int:
        try:
            return [company.name.lower() for company in self._companies].index(
                company_name.lower()
            )
        except ValueError:
            return -1

    def modify_company(self, index: int) -> None:
        print()
        print("*********************************")
        print("*******  MODIFY COMPANY   *******")
        print("*********************************")
        print("1. Open new outlet")
        print("2. Close outlet")
        print("3. Expand outlet")
        print("C. Cancel operation")
        print()
        choice = ""
        while choice not in ["1", "2", "3", "C"]:
            choice = input("Enter your choice: ")
        if choice == "C":
            print("Operation Cancelled")
            return
        print()
        if choice == "2" or choice == "3":
            outlet_index = int(input("Enter ID of outlet: "))
            if outlet_index > 0 and outlet_index <= self._companies[index].no_outlets:
                if choice == "2":
                    company_closed = self._companies[index].close_outlet(
                        outlet_index - 1
                    )
                    if company_closed:
                        print("That company has now closed down as it has no outlets.")
                        self._companies.pop(index)
                else:
                    self._companies[index].expand_outlet(outlet_index - 1)
            else:
                print("Invalid outlet ID.")
        elif choice == "1":
            x = int(input("Enter X coordinate for new outlet: "))
            y = int(input("Enter Y coordinate for new outlet: "))
            if (
                x >= 0
                and x < self._simulation_settlement.x_size
                and y >= 0
                and y < self._simulation_settlement.y_size
            ):
                self._companies[index].open_outlet(x, y)
            else:
                print("Invalid coordinates.")
        print()

    def display_companies(self):
        print()
        print("*********************************")
        print("*** Details of all companies: ***")
        print("*********************************")
        print()

        for company in self._companies:
            print(company.details)
            print()

    def run(self):
        choice = ""
        while choice != "Q":
            self.display_menu()
            choice = input()[0].upper()
            if choice == "1":
                self._simulation_settlement.display_households()
            elif choice == "2":
                self.display_companies()
            elif choice == "3":
                index = -1
                while index == -1:
                    company_name = input("Enter company name: ")
                    index = self.company_index(company_name)
                self.modify_company(index)
            elif choice == "4":
                self.add_company()
            elif choice == "6":
                self.process_day_end()
            elif choice == "Q":
                print("Simulation finished, press Enter to close.")
                input()


def main():
    Simulation().run()


if __name__ == "__main__":
    try:
        main()
    except (EOFError, KeyboardInterrupt):
        pass
