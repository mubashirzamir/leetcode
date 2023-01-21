class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        map = {}
        freq = [[] for i in range(len(nums)+1)]

        for n in nums: 
            map[n] = map.get(n, 0) + 1
        for n, c in map.items():
            freq[c].append(n)       

        result = []

        for i in range (len(freq) - 1, 0, -1):
            for j in range (len(freq[i])):
                result.append(freq[i][j])
                if (len(result) == k):
                    return result     

       
