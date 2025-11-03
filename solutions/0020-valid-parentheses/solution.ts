function isValid(s: string): boolean {
    let stack: string[] = []

    for (const c of s) {
        const top = stack[stack.length - 1]
        if (['(', '{', '['].includes(c)) stack.push(c)
        else if ((top === '(' && c === ')') || (top === '{' && c === '}') || (top === '[' && c === ']')) stack.pop()
        else return false
    }

    return stack.length === 0
};
