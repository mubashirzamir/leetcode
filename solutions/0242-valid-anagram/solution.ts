function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const sCount = getLetterCount(s)
    const tCount = getLetterCount(t)

    for (const [key, value] of sCount) {
        if (tCount.get(key) !== value) return false
    }

    return true
};

const getLetterCount = (p: string): Map<string, number> => {
    const map = new Map<string, number>()

    for (const c of p) {
        map.set(c, (map.get(c) + 1) || 1)
    }

    return map
}
