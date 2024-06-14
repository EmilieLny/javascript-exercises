class LogQueryManager {
    constructor() {
        this.output = [];
        this.queryId = 1;
        this.queryById = {}; // { qIDs: Q };
        this.potentialQueryByWord = {}; // { qWord: [qIDs] };
    }

    processInput(input) {
        // Handle Query
        if (input.startWith("Q:")) {
            const query = input.slice(3);
            this.queryById[this.queryId] = query;
            query.split(" ").forEach((qWord) => {
                if (!this.potentialQueryByWord[qWord]) {
                    this.potentialQueryByWord[qWord] = [];
                }
                this.potentialQueryByWord[qWord].push(this.queryId);
            });
            this.output.push(`ACK: ${query}; ID=${this.queryId}`);
            this.queryId++;
        }

        // Handle Log
        if (input.startWith("L:")) {
            const log = input.slice(3);
            const potentialQueryIds = this.getPotentialQueryIdByLog(log);
            const matchingQueryIds = potentialQueryIds.filter((qId) =>
                isMatch(qId, log)
            );
            if (!matchingQueryIds.length) {
                this.output.push(`ACK: ${log}`);
            }
            this.output.push(`M: ${log}; Q=${matchingQueryIds.join(",")}`);
        }
    }

    isMatch(qId, log) {
        const logSet = new Set(log.split(" "));
        return this.queryById[qId]
            .split(" ")
            .every((queryWord) => logSet.has(queryWord));
    }

    getPotentialQueryIdByLog(log) {
        return log
            .split(" ")
            .flatMap((lWord) => this.getPotentialQueryIdsByWord(lWord));
    }

    getPotentialQueryIdsByWord(word) {
        return this.potentialQueryByWord[word] || [];
    }

    getOutput() {
        return this.output;
    }
}
