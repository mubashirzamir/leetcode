function permute(nums: number[]): number[][] {
    // Backtracking
    // Time: O(n * n!)
    // Space: O(n)

    // Track which indices have been added to the current permutation
    const visited = Array(nums.length).fill(false)

    const result = []
    const current = []

    const backtrack = () => {
        // Current permutation is complete — record a snapshot and unwind
        if (current.length === nums.length) {
            result.push([...current])
            return
        }

        for (let i = 0; i <= nums.length - 1; i++) {
            // Skip elements already in the current permutation
            if (visited[i]) continue

            current.push(nums[i])
            visited[i] = true

            backtrack()

            // Undo the choice so we can try the next candidate
            current.pop()
            visited[i] = false
        }
    }

    backtrack()

    return result
};
