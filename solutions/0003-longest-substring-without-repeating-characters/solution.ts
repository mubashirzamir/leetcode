function lengthOfLongestSubstring(s: string): number {
    // two pointers

    let left = 0
    let right = 0
    let result = 0
    let set = new Set<string>()

    while (left <= right && right < s.length && result <= s.length - left) {
        const c = s.charAt(right)

        if (set.has(c)) {
            left++
            right = left
            set.clear()
        } else {
            set.add(c)
            result = Math.max(result, right - left + 1)
            right++
        }
    }

    return result
};
