function coinChange(coins: number[], amount: number): number {
    // Bottom Up DP (Tabulation)
    // Time: O(Coins * Amount)
    // Space: O(Amount)

    // Sort ascending so we can break early when coin exceeds current amount
    coins.sort((a, b) => a - b)

    // dp[i] = minimum coins needed to make amount i
    // Start everything as Infinity (unreachable), except dp[0] = 0 (0 coins to make amount 0)
    const dp = Array(amount + 1).fill(Number.POSITIVE_INFINITY)
    dp[0] = 0

    for (let i = 1; i <= amount; i++) {
        // Try every coin as the "last coin added" to reach amount i
        for (const c of coins) {
            const diff = i - c  // the remainder we still need to make after picking coin c

            // If diff < 0, coin c is too large for this amount.
            // All subsequent coins are even larger (sorted), so break early.
            if (diff < 0) break

            // dp[diff] is already solved (diff < i, computed in a prior iteration).
            // dp[diff] + 1 means: "best way to make the remainder, plus this one coin c"
            // Take the minimum across all valid coin choices for this amount i
            dp[i] = Math.min(dp[i], 1 + dp[diff])
        }
    }

    // If dp[amount] is still Infinity, no combination of coins can make the amount
    return dp[amount] === Number.POSITIVE_INFINITY ? -1 : dp[amount]
};
