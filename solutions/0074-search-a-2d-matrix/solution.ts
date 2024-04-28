function searchMatrix(matrix: number[][], target: number): boolean {
    const n = matrix[0].length

    let rowLo = 0
    let rowHi = matrix.length - 1

    while (rowLo <= rowHi) {
        const mid = Math.floor((rowLo + rowHi) / 2)
        if (matrix[mid][0] === target || matrix[mid][n-1] === target) return true
        if (matrix[mid][0] < target && matrix[mid][n-1] > target) return binarySearch(matrix[mid], target)
        else if (matrix[mid][0] > target) rowHi = mid - 1
        else rowLo = mid + 1
    } 

    return false
};

const binarySearch = (arr: number[], target: number): boolean => {
    let lo = 0
    let hi = arr.length - 1

    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2) 
        if (arr[mid] === target) return true
        else if (arr[mid] > target) hi = mid - 1
        else lo = mid + 1
    }

    return false
 }

