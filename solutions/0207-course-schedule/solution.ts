function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    // build adjacency list -> course => prerequisites
    // use DFS to check if a course path creates a cycle
    // visiting set = nodes currently in recursion stack
    // taken set = courses already confirmed safe
    // if we revisit a visiting node => cycle exists
    // if all DFS traversals finish without cycles => return true
    
    if (prerequisites.length === 0) return true

    const map = new Map<number, number[]>()

    for (const course of prerequisites) {
        map.set(course[0], (map.get(course[0]) || []).concat(course[1]))
    }

    const taken = new Set<number>() // To keep track of taken course
    const visiting = new Set<number>() // To detect circles

    const recurse = (current) => {
        if (taken.has(current)) return true
        if (visiting.has(current)) return false

        visiting.add(current)

        for (const n of (map.get(current) || [])) {
            if (!recurse(n)) return false
        }

        taken.add(current)
        visiting.delete(current)

        return true
    }

    for (const [key, value] of map) {
        if (!recurse(key)) return false
    }

    return true
};
