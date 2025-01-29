/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // Sort coins in descending order to try larger coins first
    coins.sort((a, b) => a - b);

    // Memoization map to store computed results
    const memo = new Map();

    const minCoins = (n) => {
        // Base case: 0 coins needed for amount 0
        if (n === 0) return 0;

        // If result is already computed, return it
        if (memo.has(n)) return memo.get(n);

        let min = Infinity;

        // Try each coin
        for (let coin of coins) {
            if (coin > n) continue; // Skip coins larger than the remaining amount

            // Recursively compute the minimum coins for the remaining amount
            const res = minCoins(n - coin);

            // If a valid solution exists, update the minimum
            if (res !== Infinity) {
                min = Math.min(min, res + 1);
            }
        }

        // Store the result in the memoization map
        memo.set(n, min);

        return min;
    };

    const result = minCoins(amount);
    return result === Infinity ? -1 : result;
};
