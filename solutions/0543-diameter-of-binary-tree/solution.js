/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let max = 0

    const eval = (node) => {
        if (node === null) {
            return 0
        }

        if (node.left === null && node.right === null) {
            return 1
        }

        const left = eval(node.left)
        const right = eval(node.right)
        const height = Math.max(left, right)
        max = Math.max(max, left + right)

        return height + 1
    }

    eval(root)
    
    return max
};
