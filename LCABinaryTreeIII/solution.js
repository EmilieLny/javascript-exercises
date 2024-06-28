// Definition for a Node.
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function buildTree(nodes) {
    if (!nodes.length) return null;

    let nodeList = nodes.map(val => val === null ? null : new Node(val));
    let root = nodeList[0];

    for (let i = 0; i < nodeList.length; i++) {
        if (nodeList[i] === null) continue;
        let leftIndex = 2 * i + 1;
        let rightIndex = 2 * i + 2;
        if (leftIndex < nodeList.length && nodeList[leftIndex] !== null) {
            nodeList[i].left = nodeList[leftIndex];
            nodeList[leftIndex].parent = nodeList[i];
        }
        if (rightIndex < nodeList.length && nodeList[rightIndex] !== null) {
            nodeList[i].right = nodeList[rightIndex];
            nodeList[rightIndex].parent = nodeList[i];
        }
    }
    return root;
}

const lowestCommonAncestor = (p, q) => {
    let pStack = new Set();
    while (p) {
        pStack.add(p);
        p = p.parent;
    }

    while (q) {
        if (pStack.has(q)) return q;
        q = q.parent;
    }
};

// Test case 1
const nodes1 = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const root1 = buildTree(nodes1);
const p1 = root1.left; // Node with value 5
const q1 = root1.right; // Node with value 1
console.log("Test case 1: ", lowestCommonAncestor(p1, q1)?.val); // Output: 3

// Test case 2
const nodes2 = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const root2 = buildTree(nodes2);
const p2 = root2.left; // Node with value 5
const q2 = root2.left.right.right; // Node with value 4
console.log("Test case 2: ", lowestCommonAncestor(p2, q2)?.val); // Output: 5