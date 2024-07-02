# Lowest Common Ancestor of a Binary Tree III

## Description

Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).

Each node will have a reference to its parent node. The definition for Node is below:

```
class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}
```

According to the definition of LCA on Wikipedia: “The lowest common ancestor of two nodes p and q in a tree T is the lowest node that has both p and q as descendants (where we allow a node to be a descendant of itself).”

## Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1

Output: 3

Explanation: The LCA of nodes 5 and 1 is 3.

## Example 2:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4

Output: 5

Explanation: The LCA of nodes 5 and 4 is 5 since a node can be a descendant of itself according to the LCA definition.

## Example 3:

Input: root = [1,2], p = 1, q = 2

Output: 1

## Constraints:

The number of nodes in the tree is in the range [2, 10^5].
-10^9 <= Node.val <= 10^9
All Node.val are unique.
p != q
p and q exist in the tree.

## Notes

LCA

- looking for 2 nodes (q & p) + binary tree + no parents

  - solution: recursive
    - iterate the tree to return p & q;
    - on recursive resolved (bubble up), check if:
      - q & p are in my right & left = current node is the solution
      - the solution is in my right | left = i bubble up the current solution
    - note: the base case will update the highest p | q node as LCA in case they are on the same path: `if (root == p || root == q) return root;`

- looking for 2 nodes (q & p) + tree + no parents

  - solution: recursive
    - iterate the tree to return p & q - go down;
    - on recursive resolved (bubble up), check if:
      - q & p are my children = current node is the solution
      - 1 solution is in my children = i bubble up the current solution
    - note: the base case will update the highest p | q node as LCA in case they are on the same path: `if (root == p || root == q) return root;`

- looking for 2 nodes (q & p) + tree + with parents
  - solution:
    - create one path to the root using `Set`
    - iterate the second path while looking for an ancestor that exist in the `Set` & return it
