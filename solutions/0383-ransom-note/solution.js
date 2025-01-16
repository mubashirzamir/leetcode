/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const ransomMap = countLetters(ransomNote)
    const magazineMap = countLetters(magazine)

    for ([key, value] in ransomMap) {
        if (!magazineMap.hasOwnProperty(key) || magazineMap[key] < ransomMap[key]) {
            return false
        }
    }

    return true
};

const countLetters = (word) => {
    let letterMap = {}

    for (letter of word) {
        if (!letterMap[letter]) {
            letterMap[letter] = 1
        } else {
            letterMap[letter]++
        }
    }

    return letterMap
}
