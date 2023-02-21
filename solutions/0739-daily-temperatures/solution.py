class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        stack = []
        indexStack = []
        result = [0 for i in range (len(temperatures))]

        for i in range (len(temperatures)):

            while (len(stack) > 0 and stack[-1] < temperatures[i]):
                j = indexStack.pop()
                result[j] = i - j
                stack.pop()  

            stack.append(temperatures[i])
            indexStack.append(i)

        return result

