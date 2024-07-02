// const regions = [
//     ["Earth", "North America", "South America"],
//     ["South America", "Brazil"],
//     ["North America", "United States", "Canada"],
//     ["Canada", "Ontario", "Quebec"],
//     ["United States", "New York", "Boston"]
// ];
// const region1 = "Quebec"
// const region2 = "New York"
// Output: "North America"

const regions = [
    ["Earth", "North America", "South America"],
    ["North America", "United States", "Canada"],
    ["United States", "New York", "Boston"],
    ["Canada", "Ontario", "Quebec"],
    ["South America", "Brazil"]
]
const region1 = "Canada"
const region2 = "South America"
// Output: "Earth"

const findSmallestRegion = (regions, region1, region2) => {
    let dictionary = {}
    regions.forEach(region => {
        const parent = region[0];
        for (let i = 1; i < region.length; i++) {
            dictionary[region[i]] = parent;
        }
    })
    let region1Path = new Set();
    while (region1) {
        region1Path.add(region1);
        region1 = dictionary[region1];
    }

    while (region2) {
        if (region1Path.has(region2)) return region2;
        region2 = dictionary[region2];
    }

    return null
}

console.log(findSmallestRegion(regions, region1, region2))