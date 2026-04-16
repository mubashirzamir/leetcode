function maxProfit(prices: number[]): number {
    // two pointers
    // keep track of currProfit
    // maxProfit = max(currProfit, maxProfit)

    let maxProfit = 0
    let i = 0
    let j = 1

    while (j < prices.length) {
        if (prices[i] > prices[j]) {
            i = j
            j = i + 1
        } else {
            maxProfit = Math.max(maxProfit, prices[j] - prices[i])
            j++
        }
    }

    return maxProfit
};
