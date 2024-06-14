# Log Query Matching System

## Objective:

Develop a function to analyze a series of log entries and queries, determining matches based on the presence of specified keywords in the logs.

## Background:

You are provided with a stream of log entries (L) and queries (Q). Each query consists of one or more keywords. A log entry is considered a match (M) for a query if all the keywords specified in the query are present in the log entry.

### Input Format:

livetail_stream: An array where each element represents either a log entry or a query.
Log entries are prefixed with L: followed by the log content.
Queries are prefixed with Q: followed by the query keywords.

### Output Format:

livetail_output: An array where each element represents a response to the entries in the livetail_stream.
For queries, the response is ACK: <query>; ID=<id>, where <id> is a unique identifier for the query.
For log entries, the response is either M: <log entry>; Q=<id1,id2,...> if the log matches one or more queries, or an acknowledgement if no matches are found.

## Requirements:

Parse the livetail_stream to separate logs and queries. Assign a unique identifier to each query.
Check each log entry against all queries to determine if it matches.
A log entry matches a query if all keywords in the query are found as whole words in the log entry.
Produce the livetail_output based on the matches found. Each match should reference the IDs of the queries it matches.

### Example Input:

```
livetail_stream = [
    "Q: database",
    "Q: Stacktrace",
    "Q: loading failed",
    "L: Database service started",
    "Q: snapshot loading",
    "Q: fail",
    "L: Started processing events",
    "L: Loading main DB snapshot",
    "L: Loading snapshot failed no stacktrace available",
]
```

### Expected Output:

```
livetail_output = [
    "ACK: database; ID=1",
    "ACK: Stacktrace; ID=2",
    "ACK: loading failed; ID=3",
    "M: Database service started; Q=1",
    "ACK: snapshot loading; ID=4",
    "ACK: fail; ID=5",
    "M: Loading main DB snapshot; Q=4",
    "M: Loading snapshot failed no stacktrace available; Q=2,3,4",
]
```

## Task:

Implement the function `match_logs_and_queries`(livetail_stream) that produces the `livetail_output` based on the given livetail_stream.
