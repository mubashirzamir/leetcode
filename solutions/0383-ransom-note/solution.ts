function canConstruct(ransomNote: string, magazine: string): boolean {
    // Check if the two are anagrams of each other?
    let map = new Map<string, number>()

    for (const c of ransomNote) {
        map.set(c, (map.get(c) || 0) + 1)
    }

    for (const c of magazine) {
        let current = map.get(c)
        if (current) {
            map.set(c, --current)
            if (current === 0) map.delete(c)
        } 
    }

    return map.size === 0
};
