/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let left = 0
    let right = 1
    let result = 0;

    while (right < prices.length) {
        if (prices[left] > prices[right]) {
            left = right
        } else {
            result = Math.max(result, prices[right] - prices[left])
        }
        
        right++
    }

    return result
};
