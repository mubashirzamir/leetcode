/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// Just dfs and keep checking along the way
function isValidBST(root: TreeNode | null): boolean {

    const dfs = (root: TreeNode | null, lowerBound: number, upperBound: number) => {
        if (!root) return true

        if (root.left && (root.val <= root.left.val || root.left.val <= lowerBound)) return false
        if (root.right && (root.val >= root.right.val || root.right.val >= upperBound)) return false

        return dfs(root.left, lowerBound, root.val) && dfs(root.right, root.val, upperBound)
    }

    return dfs(root, -Infinity, Infinity)
};
