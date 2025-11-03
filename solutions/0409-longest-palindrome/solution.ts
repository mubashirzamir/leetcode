function longestPalindrome(s: string): number {
    // Build count map
    // Order by descending
    // Use all even
    // Use the highest which is odd
    // For the rest of the odd occurences leave one behind
    let sMap = new Map<string, number>()
    let result = 0

    for (const c of s) {
        sMap.set(c, (sMap.get(c) || 0) + 1)
    }

    let arr = []
    for (const [key, value] of sMap) {
        arr.push([key, value])
    }

    arr.sort((a, b) => b[1] - a[1])

    let oddUsed = false

    for (const item of arr) {
        if (item[1] % 2 === 0) result += item[1]
        else if (!oddUsed) {
            result += item[1]
            oddUsed = true
        } else {
            result += item[1] - 1
        }
    }

    return result
};
