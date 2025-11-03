function canConstruct(ransomNote: string, magazine: string): boolean {
    let sMap = new Map<string, number>()

    for (const c of ransomNote) {
        sMap.set(c, (sMap.get(c) || 0) + 1)
    }

    for (const c of magazine) {
        if (!sMap.has(c)) continue
        sMap.set(c, sMap.get(c) - 1)
        if (sMap.get(c) === 0) sMap.delete(c)
    }

    return sMap.size === 0
};
