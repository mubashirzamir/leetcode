function reverseBits(n: number): number {
    let result = ''
    const binary = n.toString(2).padStart(32, "0")

    for (let i = binary.length - 1; i >= 0; i--) {
        result += binary.charAt(i)
    }

    return parseInt(result, 2)
};
