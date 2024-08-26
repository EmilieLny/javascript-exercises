function formatter(countCandidates, candidates) {
    let output = [];
    // console.log({ countCandidates, candidates })
    countCandidates.forEach((count, j) => {
        for (let i = 0; i < count; i++) {
            output.push(candidates[j])
        }
    })
    return output;
}


function combinationSum(candidates, target) {
    let countCandidates = new Array(candidates.length).fill(0);
    let output = []

    const explore = (target, i) => {
        if (target === 0) {
            output.push(formatter(countCandidates, candidates))
            return;
        }
        if (i >= candidates.length) return;

        for (let c = 0; candidates[i] * c <= target; c++) {
            //choose
            countCandidates[i] = c;
            target -= candidates[i] * c;

            // explore
            explore(target, i + 1);

            // unchoose
            target += c * candidates[i];
            countCandidates[i] = 0;
        }
        // console.log(countCandidates)
    }

    explore(target, 0);

    return output;
};