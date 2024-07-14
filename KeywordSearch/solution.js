

search_list = [
    "peter", "piper", "picked", "a", "peck", "of", "pickled", "peppers", "a",
    "peck", "of", "pickled", "peppers", "peter", "piper", "picked", "if",
    "peter", "piper", "picked", "a", "peck", "of", "pickled", "peppers",
    "wheres", "the", "peck", "of", "pickled", "peppers", "peter", "piper", "picked",
]
keywords = ["a", "peter", "picked", "piper"]
// # Output: [0, 17]

const getBeginningSequences = (search_list, keywords) => {
    let counter = {};
    let count = 0;
    let output = []
    keywords.forEach(element => {
        counter[element] = 1;
    });

    search_list.slice(0, keywords.length).forEach(element => {
        if (counter[element] !== undefined) {
            counter[element]--;
            if (counter[element] === 0) count++;
        }
    })

    const isComplete = () => count === keywords.length
    if (isComplete()) output.push(0)

    for (let i = 1; i + keywords.length - 1 < search_list.length; i++) {

        const prev = search_list[i - 1];
        if (counter[prev] !== undefined) {
            counter[prev]++;
            if (counter[prev] > 0) count--;
        }
        const next = search_list[i + keywords.length - 1];
        if (counter[next] !== undefined) {
            counter[next]--;
            if (counter[next] === 0) count++;
        }
        if (isComplete()) output.push(i)
    }
    console.log({ output })
    return output
}

getBeginningSequences(search_list, keywords)