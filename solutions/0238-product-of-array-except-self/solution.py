class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:

        prefix = [0 for i in range (len(nums))]
        postfix = [0 for i in range (len(nums))]
        result = [0 for i in range(len(nums))]

        temp = 1
        for i in range (len(nums)):
            temp *= nums[i]  
            prefix[i] = temp

        temp = 1
        for i in range (len(nums) - 1, 0, -1):
            temp *= nums[i]
            postfix[i] = temp

        for i in range(len(nums)):
            if (i == 0):
                result[i] = postfix [i + 1] 
            elif (i == len(nums) - 1):
                result[i] = prefix [i -1]
            else:        
                result[i] = prefix[i - 1] * postfix [i + 1] 

        return result        
