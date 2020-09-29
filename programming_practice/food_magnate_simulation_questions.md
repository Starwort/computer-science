---
layout: default
title: Food Magnate Simulation Questions | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.4.2 "fix backlink text" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Food Magnate Simulation Questions
---

<style>
ol {
  counter-reset: item;
}
ol>li {
  display: block;
}
ol>li:before {
  content: counters(item, ".") ". ";
  counter-increment: item;
}
</style>

# Food Magnate Simulation Questions

← [Back to Programming Practice](./index.html)

1. State the name of an identifier for:
    1. A subroutine in the `Settlement` class that returns something other than a primitive value

        > `GetRandomLocation`
    2. A local variable that is used to return a Boolean

        > `CloseCompany`
    3. A collection attribute in the `Company` class

        > `_Outlets`
    4. An instance of `Settlement`

        > `_SimulationSettlement`
2. Explain how validation might be added to the `OpenOutlet` subroutine of the `Company` class to prevent a new outlet being created beyond the bounds of the settlement.

    The `OpenOutlet` subroutine could be passed the instance of `Settlement` the company resides within and ensure that the target X and Y are within the `Settlement`'s X and Y bounds.
3. Explain the role of the variable `UpOrDown` in the `ProcessCostOfFuelChangeEvent` subroutine of the `Simulation` class.

    The variable `UpOrDown` determines if the price of fuel will increase or decrease; if `UpOrDown` is 0 then the price goes up and if it's 1 (or anything else) then the price goes down.
4. In the `Simulation` constructor, the integer literals `100000`, `200`, and `203` are passed to the `Company` constructor when creating the 'AQA Burgers' company. State the role of each of these integer literals.

    `100000`, the first integer literal, is passed to the `Company` initialiser as the company's balance; how much money it has. `200`, the second integer literal, is passed to the `Company` initialiser as the company's first outlet's X position, and `203`, the third integer literal, is passed to the `Company` initialiser as the company's first outlet's Y position.
5. Describe in full the operation of the `GetIndexOfCompany` subroutine in the `Simulation` class.

    `GetIndexOfCompany` begins by setting a sentry variable, `Index`, equal to a sentry value, `-1`. It then iterates through each valid index into the `Simulation` object's `_Companies` attribute, and compares the `Company`'s name, case insensitively, to the search query (by normalising both names to lower case). If the `Company` is determined to match then the current index is returned, otherwise the loop continues.

    If the loop completes without finding a match, then the `Index` sentry is returned. (It's never modified, so it could just be a constant. Whatever.)
6. Describe the circumstances under which the `ModifyCompany` subroutine of the `Simulation` class would output the text 'Invalid coordinates'.

    Any of the following:

    - Desired X is less than 0
    - Desired X is more than the X size of the settlement's
    - Desired Y is less than 0
    - Desired Y is more than the Y size of the settlement's
7. Currently, a call to the `LargeSettlement` constructor could not result in a settlement that is smaller than 1,000 by 1,000. This is true even if negative numbers are entered by the user when prompted for additional x and y values. Explain how a call to the `LargeSettlement` constructor never results in a smaller settlement size.

    As the `Settlement` initialiser is called, the initial 250 houses will be within the 1000x1000 area, even if the bounds of the settlement (or even the number of houses) are lowered afterwards by `LargeSettlement`'s initialiser.
8. Describe exactly how the `ProcessDayEnd` subroutine works in the `Simulation` class.

    First, an empty string `Details` is created, along with `ProfitLossFromOutlets` and `ProfitLossFromThisOutlet`, both of which are set to 0.

    Then, if there is more than one outlet, `DeliveryCosts` is set to the base delivery cost + a calculated cost between outlets, otherwise it is set to the base delivery cost.

    Then, some information about the costs for the day are added to `Details`.

    After that, `ProfitLossFromThisOutlet` is calculated for each outlet, a message is added to `Details`, and `ProfitLossFromOutlets` is increased by `ProfitLossFromThisOutlet`.

    Next, the company's current balance is appended to `Details`, updated with the daily costs, delivery costs, and profit/loss from all outlets, and the new balance is appended to `Details`.

    Finally, the fully constructed `Details` is returned.
9. Describe how the program would respond to a call to the `Company` constructor using a category that is neither 'fast food', 'family', nor 'named chef'.

    Any category other than 'fast food' or 'family' is treated as if it were a 'named chef' category; the initial values (other than category itself) are created as if the category were 'named chef'.
