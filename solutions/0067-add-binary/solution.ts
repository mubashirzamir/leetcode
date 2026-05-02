function addBinary(a: string, b: string): string {
    let length = a.length

    if (a.length < b.length) {
        a = a.padStart(b.length, "0")
        length = b.length
    } else if (a.length > b.length) {
        b = b.padStart(a.length, "0")
        length = a.length
    }

    let carry = 0
    let result = ""

    for (let i = length - 1; i >= 0; i--) {
        const p = parseInt(a[i])
        const q = parseInt(b[i])

        const sum = p + q + carry

        if (sum >= 2) carry = 1
        else carry = 0

        result = `${sum % 2}${result}` 
    }


    return carry === 0 ? result : "1" + result
};
