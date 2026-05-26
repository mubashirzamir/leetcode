function productExceptSelf(nums: number[]): number[] {
    // [1, 2, 3, 4]
    // 
    // f = [1, 1, 2, 6] // Index stores product of all numbers before it
    // b = [24, 12, 4, 1] // Index stores product of all numbers after it
    // The edges are one by default.
    // f x b gives us the answer

    const fArr = [1]

    for (let i = 1; i < nums.length; i++) {
        fArr.push(fArr[i - 1] * nums[i - 1])
    }

    const bArr = Array(nums.length).fill(Infinity)
    bArr[bArr.length - 1] = 1

    for (let i = bArr.length - 2; i >= 0; i--) {
        bArr[i] = bArr[i + 1] * nums[i + 1]
    }

    return fArr.map((value, index) => value * bArr[index])
};
