function isPalindrome(s: string): boolean {
    s = s.toLowerCase()
    let i = 0
    let j = s.length - 1

    while (i < j) {
        while (i < j && !isAlNum(s.charAt(i))) i++
        while (i < j && !isAlNum(s.charAt(j))) j--

        if (s.charAt(i) !== s.charAt(j)) return false

        i++
        j--
    }

    return true
};

const isAlNum = (c: string): boolean => {
    return (c.charCodeAt(0) >= 97 && c.charCodeAt(0) <= 122) || (c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57)
} 
