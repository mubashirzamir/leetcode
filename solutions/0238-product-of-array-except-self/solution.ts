function productExceptSelf(nums: number[]): number[] {
    const fArr = []
    let start = 1

    for (const n of nums) {
        fArr.push(start)
        start *= n
    }

    const bArr = []
    start = 1

    for (let i = nums.length - 1; i >= 0; i--) {
        bArr[i] = start
        start *= nums[i]
    }

    const result = []

    for (let i = 0; i < nums.length; i++) {
        result[i] = fArr[i] * bArr[i]
    }

    return result
};
