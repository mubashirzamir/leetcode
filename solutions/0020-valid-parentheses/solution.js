/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (['(', '{', '['].includes(s.charAt(i))) {
            stack.unshift(s.charAt(i))
        } else if ((')' === s.charAt(i) && stack[0] === '(')
            || ('}' === s.charAt(i) && stack[0] === '{')
            || (']' === s.charAt(i) && stack[0] === '[')) {
            stack.shift()
        } else {
            return false
        }
    }

    return stack.length === 0
};
