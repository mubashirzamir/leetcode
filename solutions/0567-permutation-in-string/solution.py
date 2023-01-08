class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:

        if (len(s1) > len(s2)):
            return False

        countS1 = {}

        for i in range (len(s1)):
            countS1[s1[i]] = 1 + countS1.get(s1[i], 0)

        c = {}
        l = 0
        w = len(s1)
      
        for r in range(len(s2)):

            c[s2[r]] = c.get(s2[r], 0) + 1

            if (r - l + 1 > w):

                c[s2[l]] = c[s2[l]] - 1

                if (c[s2[l]] == 0):
                    c.pop(s2[l])
                        
                l += 1

            if (c == countS1):
                return True    

        return False



    
        
