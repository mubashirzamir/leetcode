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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false

    const dfs = (node, current = 0) => {
        if (!node) return false

        current = current + node.val

        if (current === targetSum && !node.left && !node.right) return true

        return dfs(node.left, current) || dfs(node.right, current)
    }


    return dfs(root)
};
