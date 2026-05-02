function majorityElement(nums: number[]): number {
    const map = new Map<number, number>()

    for (const c of nums) {
        map.set(c, (map.get(c) || 0) + 1)
    }

    return [...map].sort((a, b) => b[1] - a[1])[0][0]
};
