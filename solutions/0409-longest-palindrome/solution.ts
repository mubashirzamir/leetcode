function longestPalindrome(s: string): number {
    // To build the longest palindrome:
    // 1. Have a count map
    // 2. Have a usedOdd counter (there can only be one character that has an odd count in a palindrome)
    // 3. Use the useOdd as soon as possible (Doesn't matter really, just to get it out of the way)

    let sMap = new Map<string, number>()

    for (const c of s) {
        sMap.set(c, (sMap.get(c) || 0) + 1)
    }

    let result = 0
    let usedOdd = false

    for (const [_, value] of sMap) {
        if (!usedOdd && value % 2 !== 0) {
            result += value
            usedOdd = true
        } else if (usedOdd && value % 2 !== 0) result += value - 1
        else result += value
    }

    return result
};
