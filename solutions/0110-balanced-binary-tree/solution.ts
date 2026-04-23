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

function isBalanced(root: TreeNode | null): boolean {

    const dfs = (node: TreeNode) => {
        if (node === null) return 0

        const lHeight = dfs(node.left) + 1
        const rHeight = dfs(node.right) + 1

        if (Math.abs(lHeight - rHeight) > 1) throw Error('Unbalanced')

        return Math.max(lHeight, rHeight)
    }

    try {
        dfs(root)
    } catch (e) {
        return false
    }

    return true
};
