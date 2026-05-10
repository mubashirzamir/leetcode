function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>()

    for (const c of nums) {
        if (set.has(c)) return true
        set.add(c)
    }

    return false
};
