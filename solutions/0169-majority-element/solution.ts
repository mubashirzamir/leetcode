function majorityElement(nums: number[]): number {
    let map = new Map<number, number>()

    for (const n of nums) {
        map.set(n, (map.get(n) || 0) + 1)
    }

    return new Map([...map].sort((a, b) => b[1] - a[1])).keys().next().value
};
