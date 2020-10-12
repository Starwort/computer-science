---
layout: default
title: Polymorphism | Computer Science
autodoc_footer: Preprocessed by AutoDocs.preprocess 2.4.4 "fix broken link for 'C' filetype" ⓒ Starwort, 2020
has_back: true
back_link: ./
back_text: Back to Wb 2020 10 05
---

<style>
ol ol {
    list-style-type: upper-alpha;
}
</style>
# Polymorphism

01. Define the term *polymorphism*, and explain why it is useful
    - *Polymorphism* is the paradigm where multiple methods, with different implementations or parameters, use the same identifier.
    - Polymorphism is useful because it allows a function to call the method without knowing which specific implementation is required; for example, a subclass may need to change the behaviour of a method, or add side-effects; and because it uses the same name, no code change is needed in any function to which it is passed
02. Use the psuedocode below to answer the questions that follow:

    *we weren't given any pseudocode here...*

    01. State why `Object` cannot override any of the methods in `Number`
        - All of the methods in `Number` are defined to be `final` (non-virtual)
    02. Identify the name of an overridden method, and explain why it is an overridden method
        - No pseudocode, so no names; however, the method will be overridden because it is defined both in the base class (the original implementation) and the subclass (the override)
    03. Identify the name of an overloaded method
        - No pseudocode, so no names; however, the method will be overloaded because it is defined twice, with two different signatures; for example, `add(int, int) -> int` and `add(str, str) -> str`
    04. Identify the name of a virtual method, and explain why it is a virtual method
        - No pseudocode, so no names; however, the method will be virtual because it is defined in a (base) class, and is not marked `final` (or *is* marked `virtual`). It can be/is overridden by a subclass
03. Explain when you would choose to make a method virtual
    - A method should be made virtual if it is not *essential* that a subclasses do not override it; and subclasses that override virtual methods with useful behaviour should call the `super` version of that method in addition to their own logic
04. Code task
    - [Source](https://github.com/Starwort/computer-science/blob/master/_preprocess/programming_practice/wb_2020_10_05/polymorphism_task.py), [Download](./polymorphism_task.py)
