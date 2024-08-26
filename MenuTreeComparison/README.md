# Menu Tree Comparison

## Description:

You are given two trees representing menus: an old menu and a new menu. Each node in the tree represents a menu item and has the following structure:

```javascript
class Node {
  constructor(key, value, active) {
    this.key = key;
    this.value = value;
    this.active = active;
    this.children = [];
  }
}
```

Your task is to compare the old menu tree with the new menu tree and count the number of changed nodes. A node is considered changed if:

1. Its value has changed
2. Its active status has changed
3. It exists in one tree but not in the other (in this case, consider it as inactive in the tree where it's missing)

## Note:

- There are no duplicate nodes with the same key in a single tree.
- If a node is missing in the new tree, consider it and all its descendants as inactive (but still count them as changed).

Function Signature:

```javascript
function countChangedNodes(oldMenu, newMenu) {}
```

Example 1:

```
Old Menu:
        a(1,T)
        /   \
    b(2,T) c(3,T)
     /         \
d(4,T)        e(5,T)

New Menu:
a(1,T)
    \
  c(3,F)
      \
    f(6,T)

Output: 5
Explanation:
- b, d, and e are missing in the new menu (count as 3 changes)
- c's active status changed from True to False (count as 1 change)
- f is new in the new menu (count as 1 change)
```

Example 2:

```
Old Menu:
        a(1,T)
        /   \
    b(2,T) c(3,T)
    /   \       \
d(4,T) e(5,T) g(7,T)

New Menu:
          __a(1,T)__
         /           \
   ____b(2,T)___    c(3,T)
  /      |      \      \
d(4,T) e(5,T) f(6,T) g(7,F)

Output: 2
Explanation:
- f is new in the new menu (count as 1 change)
- g's active status changed from True to False (count as 1 change)
```

## Constraints:

- The number of nodes in each tree is in the range [1, 10^4]
- 1 <= node.value <= 10^6
- All node.key values are unique within a single tree
