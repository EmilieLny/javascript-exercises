const words = ["wrt", "wrf", "er", "ett", "rftt"];
// expected: "wertf";

// const words = ["z", "x", "z"];
// expected: ""

// const words = ["zy", "zx"];
// expected: "yxz" | "zyx";

const hasInEdges = (adjacencyListInput, node) => {
    return !!adjacencyListInput[node]?.length;
};

const alienDictionary = (words) => {
    let adjacencyListOutput = {};
    let adjacencyListInput = {};
    let S = new Set();
    let L = [];

    for (let i = 0; i + 1 < words.length; i++) {
        let currentWord = words[i];
        let nextWord = words[i + 1];

        let minLength = Math.min(currentWord.length, nextWord.length);

        let flag = false;
        for (let j = 0; j < minLength; j++) {
            if (currentWord[j] === nextWord[j]) continue;
            flag = true;

            if (!adjacencyListOutput[currentWord[j]])
                adjacencyListOutput[currentWord[j]] = [];
            adjacencyListOutput[currentWord[j]].push(nextWord[j]);

            if (!adjacencyListInput[nextWord[j]])
                adjacencyListInput[nextWord[j]] = [];
            adjacencyListInput[nextWord[j]].push(currentWord[j]);
            break;
        }
        if (!flag && nextWord.length < currentWord.length) return "";
    }

    words.forEach((w) => {
        for (const char of w) {
            S.add(char);
        }
    });

    S.forEach((s) => {
        if (hasInEdges(adjacencyListInput, s)) S.delete(s);
    });

    while (S.size) {
        let n;
        for (const out of S) {
            n = out;
            S.delete(out);
            break;
        }

        L.push(n);

        [...(adjacencyListOutput[n] || [])]?.forEach((m) => {
            adjacencyListInput[m] = adjacencyListInput[m].filter(
                (input) => input !== n
            );
            delete adjacencyListOutput[n];
            if (!hasInEdges(adjacencyListInput, m)) {
                S.add(m);
            }
        });
    }

    if (Object.keys(adjacencyListOutput).length) return "";
    return L.join("");
};

console.log("response: ", alienDictionary(words));
