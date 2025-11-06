function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    if (prerequisites.length === 0) return true

    prerequisites.sort((a, b) => a[0] - b[0])
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
