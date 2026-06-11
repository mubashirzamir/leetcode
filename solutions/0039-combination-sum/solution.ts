function combinationSum(candidates: number[], target: number): number[][] {
    let result = []
    candidates.sort((a, b) => a - b)


    // tree

    const find = (i = 0, currSum = 0, path = []) => {
        // console.log(i, candidates[i], currSum, path)
        if (i > candidates.length - 1) return
        if (currSum > target) return
        if (currSum === target) {
            result.push(path)
            return
        }

        find(i, currSum + candidates[i], path.concat(candidates[i]))
        find(i + 1, currSum, path)
    }

    find()

    return result
};
