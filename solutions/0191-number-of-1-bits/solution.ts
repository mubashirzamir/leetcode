function hammingWeight(n: number): number {
    let result = 0
    const binary = n.toString(2)

    for (const c of binary) {
        if (c === '1') result++
    }

    return result
};
