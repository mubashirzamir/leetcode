function reverse(x: number): number {
    const sign = Math.sign(x)
    const result = sign * Number(String(Math.abs(x)).split("").reverse().join(''))
    const limit = Math.pow(2, 31)

    if (result < -limit || result > limit - 1) return 0

    return result
};
