// const regions = [
//     ["Earth", "North America", "South America"],
//     ["South America", "Brazil"],
//     ["North America", "United States", "Canada"],
//     ["Canada", "Ontario", "Quebec"],
//     ["United States", "New York", "Boston"]
// ];
// const region1 = "Quebec"
// const region2 = "New York"

const regions = [
    ["Earth", "North America", "South America"],
    ["North America", "United States", "Canada"],
    ["United States", "New York", "Boston"],
    ["Canada", "Ontario", "Quebec"],
    ["South America", "Brazil"]
]
const region1 = "Canada"
const region2 = "South America"

class Node {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
    tostring() {
        // one day 
    }
}

const getTreePerRegions = (regions) => {
    let regionsChildren = new Set();
    let regionsParents = [];
    let childrenByParent = {};
    for (const r of regions) {
        regionsParents.push(r[0]);
        const children = r.slice(1);
        children.forEach(child => regionsChildren.add(child));
        childrenByParent[r[0]] = children;
    }
    const root = regionsParents.filter(parent => !regionsChildren.has(parent))[0];

    const recursive = (node) => {
        return new Node(node, (childrenByParent[node] || []).map(child => recursive(child)))
    };
    return recursive(root);
}

const getLCANode = (node, r1, r2) => {
    if (!node) return null;
    if (node.val === r1 || node.val === r2) return node;
    const listNodes = node.children
        .map(child => getLCANode(child, r1, r2))
        .filter(child => !!child);

    if (listNodes.length === 2) return node;
    if (listNodes.length === 1) return listNodes[0];
    return null;
}

const findSmallestRegion = (regions, region1, region2) => {
    // create graph
    const regionsTree = getTreePerRegions(regions);

    // get the lowest common ancestor
    const LCANode = getLCANode(regionsTree, region1, region2);
    return LCANode?.val ?? '';
}

console.log(findSmallestRegion(regions, region1, region2))