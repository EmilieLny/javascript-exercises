# Sequential Keyword Search Question

Given an array of keywords and an array of search words as
parameters, write a function to return an array of indices
that indicate the beginning of contiguous sequences
of all key words in the search words array.

## Examples:

```
search_list = [
    "peter", "piper", "picked", "a", "peck", "of", "pickled", "peppers", "a",
    "peck", "of", "pickled", "peppers", "peter", "piper", "picked", "if",
    "peter", "piper", "picked", "a", "peck", "of", "pickled", "peppers",
    "wheres", "the", "peck", "of", "pickled", "peppers", "peter", "piper", "picked",
]

keywords = ["a", "peter", "picked", "piper"]

// # Output: [0, 17]
```

```
search_list = [
    "i", "saw", "susie", "sitting", "in", "a", "shoe", "shine", "shop", "where", "she",
    "sits", "she", "shines", "and", "where", "she", "shines", "she", "sits",
]
keywords = ["she", "sits", "shines"]
// # Output: [11, 17]
```

```
search_list = ["wood", "would", "woodchuck", "chuck", "could", "would", "would", "could"]
keywords = ["would", "could"]
// # Output: [4, 6]
```

```
search_list = ["hello", "hi", "hi", "greetings", "hi", "greetings", "hey", "hi"]
keywords = ["hi", "hey", "greetings"]
// # Output: [4, 5]
```
