// Top-down memoization
// Add up the unique ways you can get to (n - 1) and (n - 2)
// The intuition is that:
// (n - 1) + 1 will be a unique path
// (n - 2) + 2 will be a unique path
// Take sum to get total unique paths 
function climbStairs(n: number): number {
    let memo = [0, 1, 2]

    const ways = (n: number) => {
        if (memo[n]) return memo[n]

        const result = ways(n - 1) + ways(n - 2)
        memo[n] = result

        return result
    }

    return ways(n)
};
