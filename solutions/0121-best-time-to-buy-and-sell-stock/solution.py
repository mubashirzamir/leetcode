class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l = 0
        res = -1

        for r in range (l, len(prices)):
            if(prices[l] > prices[r]):
                l = r
            res = max(res, prices[r] - prices[l])

        return res        
