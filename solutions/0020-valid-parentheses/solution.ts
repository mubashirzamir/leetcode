function isValid(s: string): boolean {
    let stack = []

    for (let c of s) {
        if (match(stack[stack.length - 1], c)) {
            stack.pop()
        } else {
            stack.push(c)
        }
    }

    return stack.length === 0
};

const match = (p: string, q: string): boolean => {
    return (p === '(' && q === ')') || (p === '[' && q === ']') || (p === '{' && q === '}')
}
