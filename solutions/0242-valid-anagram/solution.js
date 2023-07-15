/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false
    }
    
    let sMap = {}
    let tMap = {}

    for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] || 0) + 1 
    }

    for (let i = 0; i < t.length; i++) {
        tMap[t[i]] = (tMap[t[i]] || 0) + 1 
    }

    for (const letter in sMap) {
        if (sMap[letter] !== tMap[letter]) {
            return false
        }
    }

    return true
};
