class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:

        n = len(s)
        if n == 0: 
            return 0
        if n == 1:
            return 1

        max = -1    

        for i in range (n):
            flag = True

            if(max >= n - i):
                return max

            for j in range (i+1, n):
                substr = s[i:j]
                
                if(substr.find(s[j]) != -1):
                    if(len(substr) > max):
                        max = len(substr)
                    flag = False    
                    break    
                
            if flag and n - i > max:
                return n - i
        
        return max
