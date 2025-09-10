/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length <= 1) return s;

    let result = '';

    // helper: expand around a center and return the palindrome
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        
        return s.substring(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        // odd-length palindrome
        const odd = expandAroundCenter(i, i);

        // even-length palindrome
        const even = expandAroundCenter(i, i + 1);

        // pick the longer of the two
        let contender = odd.length > even.length ? odd : even;

        if (contender.length > result.length) {
            result = contender;
        }
    }

    return result;
};

