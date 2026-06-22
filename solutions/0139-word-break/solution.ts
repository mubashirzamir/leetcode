function wordBreak(s: string, wordDict: string[]): boolean {
    // backtracking + memoization (top-down DP)
    // catsandog ["cats","dog","sand","and","cat"]
    // cats, and, ... -> "og" left over, dead end
    // cats, ...      -> dead end
    // cat, sand, og  -> "og" left over again, SAME dead end as above
    //                   memo catches this so we don't redo the scan

    // key insight: the only thing that matters is "can s[l:] be segmented?"
    // doesn't matter HOW we got to index l, the answer is always the same
    const set = new Set<string>(wordDict)

    // memo[l] = true  -> s.substring(l) can be fully broken into dict words
    // memo[l] = false -> s.substring(l) can NOT be broken, no matter the path taken
    const memo = new Map<number, boolean>()

    const backtrack = (l: number): boolean => {
        // base case: reached the end of the string, nothing left to break -> success
        if (l === s.length) return true

        // already solved this starting index before, return cached result
        // this is what turns O(2^n) -> O(n^2)
        if (memo.has(l)) return memo.get(l)!

        // try every possible word starting at l, growing the window one char at a time
        for (let r = l + 1; r <= s.length; r++) {
            const word = s.substring(l, r)

            // if word is in the dict AND the rest of the string (from r) can also be broken
            if (set.has(word) && backtrack(r)) {
                memo.set(l, true) // cache success before returning
                return true
            }
        }

        // exhausted every possible word length starting at l, none worked
        memo.set(l, false) // cache failure so future calls skip this work entirely
        return false
    }

    return backtrack(0)
}
