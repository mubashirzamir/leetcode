function maxProfit(prices: number[]): number {
    // two pointers
    // left pointer moves forward if right < left
    // right pointer keeps moving forward, resets to left + 1 if left pointer position resets

    if (prices.length === 1) return 0

    let result = 0, left = 0, right = 1

    while (right < prices.length) {
        result = Math.max(result, prices[right] - prices[left])

        if (prices[left] > prices[right]) {
            left = right
            right = left + 1
        } else {
            right = right + 1
        }
    }

    return result
};
