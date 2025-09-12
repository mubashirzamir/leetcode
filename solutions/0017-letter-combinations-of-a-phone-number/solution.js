/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits.length === 0) return []

    let result = [""]
    const lookup = [null, null, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

    for (d of digits) {
        const p = lookup[d]

        let temp = []
        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < p.length; j++) {
                temp.push(result[i] + p.charAt(j))
            }
        }

        result = temp
    }

    return result
};
