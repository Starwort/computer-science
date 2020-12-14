import pathlib

import dom_generator as dom  # this is a package I wrote and keep on my laptop
from dom_generator import material_design as mdc


def generate_page() -> dom.HTML:
    return dom.HTML(
        dom.Head(
            mdc.MaterialDesignInitialiser(),
            dom.Link(href="page.css", rel="stylesheet"),
            dom.Script("", src="page.js"),
        ),
        dom.Body(
            mdc.Card(
                content=dom.ElementGroup(
                    *[
                        mdc.Card(
                            f"Stack element #{i}",
                            class_="stack hidden",
                            id=f"stack_elem_{i}",
                        )
                        for i in range(100)
                    ]
                ),
                class_="stack-container",
            ),
            mdc.Card(
                content=dom.ElementGroup(
                    mdc.TextField("Layer description", "layer"),
                    mdc.ContainedButton(
                        text="Add element to stack",
                        icon="add_box",
                        onclick="add_element()",
                    ),
                    mdc.ContainedButton(
                        text="Pop element from stack",
                        icon="indeterminate_check_box",
                        onclick="pop_stack()",
                    ),
                    mdc.ContainedButton(
                        text="Rename top element of stack",
                        icon="article",
                        onclick="rename_element()",
                    ),
                ),
                class_="control-container",
            ),
            mdc.MaterialDesignFinaliser(),
            theme="dark",
        ),
    )


if __name__ == "__main__":
    (pathlib.Path(__file__).parent / "demo.html").write_text(
        generate_page().serialise()
    )
