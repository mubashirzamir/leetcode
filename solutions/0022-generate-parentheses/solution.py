class Solution:
    def generateParenthesis(self, n: int) -> List[str]:

        stack = []
        result = []

        def backtrack(openB: int, closeB: int):

            if (openB == closeB == n):
                result.append(''.join(stack))
                return

            if (openB < n):
                stack.append('(')
                backtrack(openB + 1, closeB)
                stack.pop()

            if (closeB < openB):
                stack.append(')')
                backtrack(openB, closeB + 1)
                stack.pop()

        backtrack(0, 0)
        return result                
