class Account:
    def __init__(self, number, password, balance):
        self._account_number = number
        self._password = password
        self._balance = balance

    def getNumber(self):
        return self._account_number

    def checkPassword(self, password):
        return password == self._password

    def getBalance(self):
        return self._balance

    def setBalance(self, newBalance):
        self._balance = newBalance


class Bank:
    def __init__(self):
        self._accounts: list[Account] = []
        self._last_account_no = -1

    def login(self):
        target = None
        while target is None:
            try:
                target = int(input("Enter your account number\n>>> "))
                if target > self._last_account_no or target < 0:
                    raise ValueError
            except ValueError:
                print("Invalid account number")
        return (
            -1
            if self._accounts[target].checkPassword(
                __import__("getpass").getpass("Enter your password ")
            )
            else target
        )

    def deposit(self, number):
        amt = None
        while amt is None:
            try:
                amt = float(input("Enter amount to deposit\n>>> "))
                if amt < 0:
                    raise ValueError
            except ValueError:
                print("Invalid amount of money")
        self._accounts[number].setBalance(self._accounts[number].getBalance() + amt)

    def withdraw(self, number):
        amt = None
        while amt is None:
            try:
                amt = float(input("Enter amount to withdraw\n>>> "))
                if amt < 0:
                    raise ValueError
            except ValueError:
                print("Invalid amount of money")
        self._accounts[number].setBalance(self._accounts[number].getBalance() - amt)

    def checkBalance(self, number):
        print(f"Your balance: {self._accounts[number].getBalance()}")

    def addAccount(self):
        self._last_account_no += 1
        self._accounts.append(
            Account(
                self._last_account_no,
                __import__("getpass").getpass("Enter your new password "),
                0,
            )
        )


def main():
    bank = Bank()
    loggedIn = False
    quitting = False

    while not loggedIn and not quitting:
        response = input("Do you have an account? (y/n/quit)")
        if response == "y":
            account = bank.login()
            if account != -1:
                loggedIn = True
        elif response == "n":
            bank.addAccount()
        elif response == "quit":
            quitting = True

    while not quitting:
        option = input(
            "Press 1 to check your balance\nPress 2 to deposit money\nPress 3 to withdraw money\nPress 4 to exit:\n"
        )
        if option == "1":
            bank.checkBalance(account)
        elif option == "2":
            bank.deposit(account)
            bank.checkBalance(account)
        elif option == "3":
            bank.withdraw(account)
            bank.checkBalance(account)
        elif option == "4":
            quitting = True
        else:
            print("Invalid option selected")


if __name__ == "__main__":
    main()
