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
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (!root) {
        return true
    }

    const dfs = (root) => {
        let rightHeight = 0
        let leftHeight = 0

        if (root.right) {
            rightHeight = dfs(root.right)
        }

        if (root.left) {
            leftHeight = dfs(root.left)
        }

        // leaf node
        if (root.right === null && root.left === null) {
            return 1
        }

        if (Math.abs(rightHeight - leftHeight) > 1) {
            throw new Error('Unbalanced')
        }

        return Math.max(rightHeight, leftHeight) + 1
    }

    try {
        dfs(root)
    } catch(e) {
        return false
    }

    return true
};
