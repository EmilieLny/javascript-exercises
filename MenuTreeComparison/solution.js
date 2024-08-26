class Node {
    constructor(key, value, active, children = []) {
        this.key = key;
        this.value = value;
        this.active = active;
        this.children = children;
    }
}

function countChangedNodes(oldMenu, newMenu) {
    let count = 0;

    const dfs = (node, record = {}, isDisabled = false) => {
        if (!node) return;
        if (isDisabled) {
            node.active = false;
        }
        record[node.key] = node;
        node.children.forEach(child => {
            dfs(child, record, !node.active || isDisabled);
        });
    };

    let oldMenuMap = {}
    dfs(oldMenu, oldMenuMap);

    // console.log("🚀 ~ countChangedNodes ~ oldMenuMap:", oldMenuMap)
    let newMenuMap = {};
    dfs(newMenu, newMenuMap);

    // console.log("🚀 ~ countChangedNodes ~ newMenuMap:", newMenuMap)

    const keys = new Set([...Object.keys(oldMenuMap), ...Object.keys(newMenuMap)])
    for (const key of keys) {
        if (!(key in newMenuMap)) {
            count++;
            continue;
        }
        if (!(key in oldMenuMap)) {
            count++;
            continue;
        }
        if (oldMenuMap[key].value !== newMenuMap[key].value) {
            count++;
            continue;
        }
        if (oldMenuMap[key].active !== newMenuMap[key].active) {
            count++;
            continue;
        }
    }

    return count;
}

// const oldMenu = new Node('a', 1, true, [
//     new Node('b', 2, true, [
//         new Node('d', 4, true),
//     ]),
//     new Node('c', 3, true, [
//         new Node('e', 5, true),
//     ]),
// ]);

// const newMenu = new Node('a', 1, true, [
//     new Node('c', 3, false, [
//         new Node('f', 6, true),
//     ]),
// ]);

const oldMenu = new Node('a', 1, true, [
    new Node('b', 2, true, [
        new Node('d', 4, true),
        new Node('e', 5, true)
    ]),
    new Node('c', 3, true, [
        new Node('g', 7, true)
    ])
]);

const newMenu = new Node('a', 1, true, [
    new Node('b', 2, false, [
        new Node('d', 4, true),
        new Node('e', 5, true),
        new Node('f', 6, true)
    ]),
    new Node('c', 3, true, [
        new Node('g', 7, false)
    ])
]);

console.log(countChangedNodes(oldMenu, newMenu))
