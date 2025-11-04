function addBinary(a: string, b: string): string {
    const result = []

    if (a.length < b.length) {
        const temp = a
        a = b
        b = temp
    }

    b = b.padStart((a.length - b.length) + b.length, "0")

    let arrA = a.split('')
    let arrB = b.split('')
    let carry = 0

    for (let i = arrA.length - 1; i >= 0; i--) {
        const sum = parseInt(arrA[i]) + parseInt(arrB[i]) + carry

        if (sum >= 2) carry = 1
        else carry = 0

        result[i] = sum % 2
    }

    return carry ? carry + result.join('') : result.join('')
};
