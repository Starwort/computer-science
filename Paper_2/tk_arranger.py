---
layout: default
title: tk_arranger | Computer Science
footer: Preprocessed by AutoDocs.preprocess 2.0.0 "clean rewrite and preprocessing" ⓒ Starwort, 2020
---

from typing import List, Union, Set, Tuple
from tkinter import Widget, NSEW


def arrange_widgets(table_of_widgets: List[List[Union[Widget, None]]]) -> None:
    all_widgets = []
    widget_obj_ids: Set[int] = set()

    for row in table_of_widgets:
        for item in row:
            if isinstance(item, Widget) and id(item) not in widget_obj_ids:
                all_widgets.append((item, id(item)))
                widget_obj_ids.add(id(item))

    for widget, _ in all_widgets:
        min_x = float("inf")
        max_x = -float("inf")
        min_y = float("inf")
        max_y = -float("inf")
        for y, row in enumerate(table_of_widgets):
            for x, place in enumerate(row):
                if place is widget:
                    if x < min_x:
                        min_x = x
                    if x > max_x:
                        max_x = x
                    if y < min_y:
                        min_y = y
                    if y > max_y:
                        max_y = y
        colspan = max_x - min_x + 1
        rowspan = max_y - min_y + 1
        widget.grid(
            column=min_x + 1,
            row=min_y + 1,
            rowspan=rowspan,
            columnspan=colspan,
            sticky=NSEW,
        )
