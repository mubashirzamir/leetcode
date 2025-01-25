/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const adj = new Map()
    const courses = prerequisites
    const tracker = []

    // creating adjacency list
    for ([a, b] of courses) {
        if (adj.get(a) === undefined) adj.set(a, [])
        adj.get(a).push(b);
    }

    // unvisited undefined
    // visiting 1
    // visited 2

    const dfs = (node) => {
        if (tracker[node] === 1) return false
        if (tracker[node] === 2) return true

        const list = adj.get(node) || []
        tracker[node] = 1

        for (l of list) {
            if (!dfs(l)) return false
        }

        tracker[node] = 2
        return true
    }

    // Check all courses
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true
};
