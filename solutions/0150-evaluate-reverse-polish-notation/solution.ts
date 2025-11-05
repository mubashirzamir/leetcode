function evalRPN(tokens: string[]): number {
    let stack: number[] = []

    for (const t of tokens) {
        if (!['+', '-', '*', '/'].includes(t)) stack.push(parseInt(t))
        else {
            const op2 = stack.pop()
            const op1 = stack.pop()
            let result = 0

            switch (t) {
                case '+':
                    result = op1 + op2
                    break
                case '-':
                    result = op1 - op2
                    break
                case '*':
                    result = op1 * op2
                    break
                case '/':
                    result = Math.trunc(op1 / op2)
                    break
                default:
                    throw new Error('Unsupported operation.')
            }

            stack.push(result)
        }
    }

    return stack[0]
};
