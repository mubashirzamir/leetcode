function titleToNumber(columnTitle: string): number {
    let result = 0
    let position = 1

    while (columnTitle.length > 0) {
        result += (columnTitle.charAt(columnTitle.length - 1).charCodeAt(0) - 64) * position
        columnTitle = columnTitle.substring(0, columnTitle.length - 1)
        position *= 26
    }

    return result
};
