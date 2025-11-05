function lengthOfLongestSubstring(s: string): number {
    // two pointers
    // use a set to keep track of current characters
    // right++ until no repeating characters
    // left++ until set does not have duplicates 
    const set = new Set<string>()
    let max = 0, left = 0, right = 0

    while (right <= s.length - 1) {
        while (set.has(s.charAt(right))) {
            set.delete(s.charAt(left))
            left++
        }

        set.add(s.charAt(right))
        max = Math.max(max, set.size)

        right++
    }

    return max
};
