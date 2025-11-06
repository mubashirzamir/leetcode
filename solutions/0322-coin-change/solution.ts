function coinChange(coins: number[], amount: number): number {
    // Bottom Up DP (Tabulation)
    // Time: O(Coins * Amount)
    // Space: O(Amount)

    coins.sort((a, b) => a - b)
    const dp = Array(amount + 1).fill(Number.POSITIVE_INFINITY)
    dp[0] = 0

    for (let i = 1; i <= amount; i++) {
        for (const c of coins) {
            const diff = i - c

            if (diff < 0) break // ascending order array so no need to check further

            dp[i] = Math.min(dp[i], 1 + dp[diff])
        }
    }

    return dp[amount] === Number.POSITIVE_INFINITY ? -1 : dp[amount]
};
