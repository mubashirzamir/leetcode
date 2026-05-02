// Bottom-up dynamic programming (tabulation)
// Build the solution iteratively from base cases instead of recursion
// The intuition is that:
// (n - 1) + 1 will be a unique path
// (n - 2) + 2 will be a unique path
// Take sum to get total unique paths 
function climbStairs(n: number): number {
    let ways = Array.from({ length: n + 1 }, () => null)

    ways[0] = 0
    ways[1] = 1
    ways[2] = 2

    for (let i = 3; i <= n; i++) {
        ways[i] = ways[i - 1] + ways[i - 2]
    }

    return ways[n]
};
