---
layout: default
title: OOP Questions | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.3.1 "hopefully fix indexes" ⓒ Starwort, 2020
---

<style>
ol ol {
    list-style-type: lower-alpha;
}
ol ol ol {
    list-style-type: lower-roman;
}
ol ol ol ol {
    list-style-type: decimal;
}
li:empty {
   position: absolute !important;
   top: -9999px !important;
   left: -9999px !important;
}
</style>

# OOP Questions

1. A program is needed to plan the layout of a garden.

    The program will allow the user to create an image of the garden, for example:

    [![Example image](./oop_img_1.png)](./oop_img_1.png)

    1. The programmer will use abstraction to produce the program interface to represent the garden.
        1. Give **two** different examples of how abstraction has been used to produce the layout of the garden.
            1. All objects have been reduced to simple shapes; ellipses for the trees and rectangles for all others.
            2. Objects are considered in 2D rather than 3D; the layout is top-down with no consideration of height/depth.
        2. Abstraction reduces the programming complexity as fewer dimensions must be considered when computing for collisions, and determining collisions of simple 2D shapes is much easier than determining collisions of arbitrary complex 2D shapes.
        3. The user needs to input data into the program to set up their garden layout.

            Identify **three** pieces of data that the user may input into this program

            1. Apple tree (type=ellipse, cx=62, cy=49, width=105, height=87)
            2. Flower bed (type=rectangle, cx=267, cy=40, width=254, height=71)
            3. Vegetable bed (type=rectangle, cx=191, cy=140, width=116, height=50)
    2. The program is to be built using object oriented programming.

        All items that can be added to the garden are declared as instances of the glass `GardenItem`.

        The class has the following attributes:

        **Attribute** | **Description**                  | **Example**
        ------------- | -------------------------------- |------------
        `itemName`    | The name of the item             | Flowerbed
        `length`      | The length of the item in metres | 2
        `width`       | The width of the item in metres  | 1

        1. The constructor method sets the attributes to values that are passed as parameters.

            Write pseudocode or program code to declare the class `GardenItem` and its constructor. All attributes should be private and initialised through the constructor (e.g. `daisies = new GardenItem("Flowerbed", 2, 1)`)

            ```java
            // I would much rather have written this in Python, but
            // the question requires that I declare the attributes
            // as private ¯\_(ツ)_/¯
            class GardenItem {
                private String itemName;
                private double length;
                private double width;
                public GardenItem(String my_itemName, double my_length, double my_width) {
                    this.itemName = my_itemName;
                    this.length = my_length;
                    this.width = my_width;
                }
            }
            ```

        2. The trees in the garden layouts are defined by the class `Tree`. This class inherits from `GardenItem`.

            The class `Tree` has the additional attributes: `height`, `sun`, `shade`.

            If `sun` is `true` then the tree can grow in full sun, if it is `false` then it cannot.

            If `shade` is `true` then the tree can grow in full shade, if it is `false` then it cannot.

            The length and width of a tree are the same. Only one value for these measurements is passed to the constructor.

            Write an algorithm, using pseudocode or program code, to declare the class `Tree`. Declare all attributes as private.

            ```java
            class Tree extends GardenItem {
                private double height;
                private boolean sun;
                private boolean shade;
                public Tree(String my_itemName, double my_diameter, double my_height, boolean my_sun, boolean my_shade) {
                    super(my_itemName, my_diameter, my_diameter);
                    this.height = my_height;
                    this.sun = my_sun;
                    this.shade = my_shade;
                }
            }
            ```

        3. The Common Oak is a type of tree. It has a maximum height, length, and width of 40m. It can grow in full sun and in full shade.

            Write a statement, using pseudocode or program code, to declare an instance of tree for the Common Oak. Give the object the identifier `firstTree`.

            ```java
            Tree firstTree = new Tree("Common Oak", 40, 40, true, true);
            ```

        4. The classes `GardenItem` and `Tree` use get and set methods to access and alter their private attributes.

            Write the get method `getItemName` and set method `setItemName` for class `GardenItem`. The set method takes the new value as a parameter.

            Do not write any other methods, or re-declare the class.

            ```java
            // within GardenItem's class definition
            public String getItemName() {
                return this.itemName;
            }
            public void setItemName(String new_itemName) {
                this.itemName = new_itemName;
            }
            ```

        5. The trees in the garden layours are stored in a 1-dimensional array, `treeArray`. The array can store a maximum of 1000 items. The array has global scope.

            A procedure, `findTree`, takes as parameters:

            - The maximum height of a tree
            - The maximum width of a tree
            - Whether the tree can live in full sun
            - Whether the tree can live in full shade

            It searches the array, `treeArray`, for all trees that do not exceed the maximum height and width, and can grow in the conditions available. If there are no suitable trees, a suitable message is output.

            It outputs the name and details of the trees found in an appropriate message.

            Call the get methods, `getItemName`, `getHeight`, `getWidth`, `getSun`, `getShade`, to access the attributes.

            Write, using pseudocode or program code, the procedure `findTree`.

            ```java
            public void findTree(double max_height, double max_width, boolean sun, boolean shade) {
                boolean found_a_tree = false;
                for (Tree tree : treeArray) {
                    if (tree.getHeight() <= max_height
                     && tree.getWidth() <= max_width
                     && tree.getSun() == sun
                     && tree.getShade() == shade) {
                        if (!found_a_tree) {
                            System.out.println("Found the following matching trees:");
                            found_a_tree = true;
                        }
                        System.out.println("- " + tree.getItemName());
                    }
                }
                if (!found_a_tree) {
                    System.out.println("No matching trees found.");
                }
            }
            ```
