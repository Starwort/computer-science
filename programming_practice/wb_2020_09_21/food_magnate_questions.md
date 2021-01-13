---
layout: default
title: Food Magnate Questions | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.5.0 "Switch to Material Icons" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Wb 2020 09 21
---

# Food Magnate Simulation questions

You have been given [the code for the Food Magnate Simulation](./pythonic_food_magnate_simulation.py). Using that code, answer the following questions:

*N.B. this code was rewritten from the original by me during the summer so it conforms to [the Python style guide](https://www.python.org/dev/peps/pep-0008/). Most names have been recased from PascalCase to snake_case*

1. State the name of an identifier for:
    1. An attribute in the `Settlement` class that is **only** accessible to subclasses of `Settlement`.
        - N/A, because this is Python and all attributes are accessible by all objects (the 'consenting adults' principle). However, an attribute that is considered non-public by convention is `Settlement._x_size`
    2. A subclass
        - `LargeSettlement`
    3. A subroutine from the `Company` class that cannot be called from outside the `Company` class.
        - Again, N/A due to the 'consenting adults' principle. However, a subroutine of `Company` that by convention is considered non-public is the static method `Company._get_distance_between_two_outlets`
    4. A string method called from the `company_index` subroutine in the `Simulation` class
        - `str.lower`

2. '10' Add an option to run the simulation for many days (>1)
    1. Your PROGRAM SOURCE CODE for the amended
        - [Diff](./task_1.diff), [source](./pythonic_food_magnate_simulation_task_1.py)
    2. SCREEN CAPTURE(S) showing the results of the requested change
        - <script id="asciicast-e5Cj9i2Ob9QM3zmPUkpyd1ToL" src="https://asciinema.org/a/e5Cj9i2Ob9QM3zmPUkpyd1ToL.js" async></script><noscript><a href="https://asciinema.org/a/e5Cj9i2Ob9QM3zmPUkpyd1ToL" target="_blank"><img src="https://asciinema.org/a/e5Cj9i2Ob9QM3zmPUkpyd1ToL.svg" /></a></noscript>
3. '11' Add a new `SmallSettlement` class and an option to create a small settlement in the simulation launch menu.
    1. Your PROGRAM SOURCE CODE for the amended
        - [Diff](./task_2.diff), [source](./pythonic_food_magnate_simulation_task_2.py)
    2. SCREEN CAPTURE(S) showing the results of the requested change
        - <script id="asciicast-lzwMKAPq7GPrsUgd2DZqMuQgJ" src="https://asciinema.org/a/lzwMKAPq7GPrsUgd2DZqMuQgJ.js" async></script><noscript><a href="https://asciinema.org/a/lzwMKAPq7GPrsUgd2DZqMuQgJ" target="_blank"><img src="https://asciinema.org/a/lzwMKAPq7GPrsUgd2DZqMuQgJ.svg" /></a></noscript>
    4. '1' This question refers to the subroutine `_process_add_households_event` and the `_display_events_at_day_end` subroutine within the `Simulation` class.

    Modify the subroutine `_process_add_households_event` in the `Simulation` class. Rename the subroutine to `_process_add_remove_households_event` and all calls to it so that they use the new identifier. Instead of just adding 1-4 houses to the settlement, there should be a 30% chance that 1-4 houses will leave the settlement instead.

    The message displayed by the subroutine should be changed so that when houses are removed, it says removed from instead of added to.

    Modify the subroutine `_display_events_at_day_end` in the Simulation class. The subroutine should always call the newly modified subroutine `_process_add_remove_households_event`.

    Test the changes that you have made work:
    - run the Skeleton Program
    - leave the first prompt blank, to indicate a normal-sized settlement
    - enter D at the next prompt for default companies
    - enter 6 for 'advance to next day'
    - enter 1 for 'display details of households'
    - repeat this until households are removed from the settlement (and are added)
