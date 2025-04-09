/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let carry = false

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
            carry = true
        } else {
            digits[i] = digits[i] + 1
            carry = false
            break
        }
    }

    if (carry) return [1, ...digits]

    return digits
};
