/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
    const dp = Array(s.length + 1).fill(false);
    wordSet = new Set(wordDict)
    dp[0] = true;

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (dp[j] && wordSet.has(s.substring(j, i + 1))) {
                dp[i + 1] = true
            }
        }
    }

    return dp[s.length]
};

