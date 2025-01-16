/**
 * @param {number} n
 * @return {number}
 */
 // Top Down Memoization
var climbStairs = function (n) {
    let cache = [0, 1, 2]

    const search = (x) => {
        if (cache[x]) {
            return cache[x]
        }

        cache[x] = search(x - 1) + search(x - 2)

        return cache[x]
    }

    return search(n)
};


