/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]

        if (['+', '-', '*', '/'].includes(token)) {
            const operand01 = stack.pop()
            const operand02 = stack.pop()

            switch (token) {
                case '+':
                    token = operand01 + operand02
                    break
                case '-':
                    token = operand02 - operand01
                    break
                case '*':
                    token = operand01 * operand02
                    break
                case '/':
                    token = Math.trunc(operand02 / operand01)
                    break

            }
        }

        stack.push(parseInt(token))
    }

    return stack[0]
};
