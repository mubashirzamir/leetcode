class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []

        for s in tokens:
            if (s in ['+', '-', '*', '/']):
                
                operand_02 = int(stack.pop())
                operand_01 = int(stack.pop())

                match s:
                    case '+':
                        res = operand_01 + operand_02
                    case '-':
                        res = operand_01 - operand_02
                    case '*':
                        res = operand_01 * operand_02
                    case '/':
                        res = operand_01 / operand_02

                stack.append(int(res))        

            else :
                stack.append(int(s))

        return stack.pop()

