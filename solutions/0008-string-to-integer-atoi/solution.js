/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();  // Remove leading/trailing whitespace
    let sign = 1;   // Default sign is positive
    let result = 0; // This will store the resulting integer

    let i = 0;

    // Check for sign
    if (s[i] === '-' || s[i] === '+') {
        sign = (s[i] === '-') ? -1 : 1;
        i++;  // Move past the sign
    }

    // Convert digits to number
    while (i < s.length && !isNaN(s[i]) && s[i] >= '0' && s[i] <= '9') {
        result = result * 10 + (s[i] - '0');
        i++;
    }

    // Apply the sign
    result *= sign;

    // Handle overflow and underflow
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;

    return result;
};

