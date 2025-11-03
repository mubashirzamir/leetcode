function isPalindrome(s: string): boolean {
    s = sanitize(s)
    let left = 0, right = s.length - 1

    while (left < right) {
        if (s.charAt(left) !== s.charAt(right)) return false

        left++
        right--
    }

    return true
};

const sanitize = (s: string): string => {
    let result = ""

    for (const c of s) {
        const cCode = c.toUpperCase().charCodeAt(0)
        if ((cCode >= 48 && cCode <= 57) || (cCode >= 65 && cCode <= 90)) result += c.toUpperCase()
    }

    return result
}
