/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let result = []
    let p = a.split('')
    let q = b.split('')

    if (p.length < q.length) {
        const temp = p
        p = q
        q = temp
    }

    const qPadding = p.length - q.length
    let carry = 0

    for (let i = p.length - 1; i >= 0; i--) {
        const a = +p[i]
        const b = +q[i - qPadding] || 0
        const sum = a + b + carry
        carry = +(sum > 1)
        result[i] = sum % 2
    }

    return carry ? carry + result.join('') : result.join('')
};
