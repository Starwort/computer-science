<style>
    :not(ul) + ol {
        counter-reset: list-ctr;
        list-style-type: none;
        list-style-position: outside;
    }
    :not(ul) + ol > li {
        counter-increment: list-ctr;
    }
    :not(ul) + ol > li::before {
        content:"Q" counter(list-ctr) ". ";
        margin-left: -25px;
    }
    ol ul {
        list-style-type: lower-alpha;
    }
    ol ul ul {
        list-style-type: lower-roman;
    }
    ul ol {
        list-style-type: circle;
    }
    ul {
        list-style-type: decimal;
    }
    ul ul {
        list-style-type: lower-alpha;
    }
    ul ul ul {
        list-style-type: lower-roman;
    }
</style>
# Chapter 47

1. 2500

## Exercises

- Representational abstraction in relation to a satellite navigation system could involve reducing a map to a set of nodes and weighted (by traffic) connections, and reducing addresses and post codes into points with latitude and longitude, which could then be used internally. It could also involve disregarding any nodes/routes outside the current country as being unhelpful.
- Abstraction could be used in a game to reduce the amount of processing required in the main game loop - objects that aren't needed can be unloaded and ignored completely. All the treasure can be thought of as one type of object (`TreasureItem`, or similar) and then it can have a different value for each instance to denote how much to reward the player when it's collected.
