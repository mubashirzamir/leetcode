function isAnagram(s: string, t: string): boolean {
    let sMap = new Map<string, number>()

    for (const c of s) {
        sMap.set(c, (sMap.get(c) || 0) + 1)
    }

    for (const c of t) {
        if (!sMap.has(c)) return false
        sMap.set(c, sMap.get(c) - 1)
        if (sMap.get(c) === 0) sMap.delete(c)
    }

    return sMap.size === 0
};
