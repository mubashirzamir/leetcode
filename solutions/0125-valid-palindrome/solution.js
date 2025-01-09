/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let t = s.toLowerCase()
    const arr = t.split('')
    t = arr.filter(c => c.match(/^[0-9a-z]+$/)).join('')
    const length = t.length

    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (t[i] !== t[length - 1 - i]) {
            return false
        }
    }

    return true
};
