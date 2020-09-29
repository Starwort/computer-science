---
layout: default
title: CSS Questions | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.4.0 "start adding backlinks" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to CSS Questions
---

<style>
ol {
    list-style-type: lower-alpha;
}
li:empty {
   position: absolute !important;
   top: -9999px !important;
   left: -9999px !important;
}
</style>

# CSS Questions

← [Back to Summer Homework](./index.html)

01. 
02. Part of a website's code is shown below

    ```html
    <head>
        <title>Orville's Oranges</title>
        <link rel="stylesheet" type="text/css" href="mainStyle.css">
    </head>
    ```

    Explain the meaning of the code

    The code sets the page's title (as shown in the browser) to `Orville's Oranges`. It also loads the stylesheet `mainStyle.css` and applies it to the page.
03. The site also contains the following code.

    ```html
    <div class="offer">All oranges 50% off.</div>
    ```

    Complete the CSS code that would make any `div` elements of the class `offer` have an orange border.

    ```css
    .offer {
        border-style: solid;
        border-color: orange;
    }
    ```