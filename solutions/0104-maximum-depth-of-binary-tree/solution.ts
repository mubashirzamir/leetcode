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

function maxDepth(root: TreeNode | null): number {
    const evaluate = (node: TreeNode | null) => {
        if (node === null) return 0
        if (node.left === null && node.right === null) return 1

        const leftHeight = evaluate(node.left)
        const rightHeight = evaluate(node.right)

        return Math.max(leftHeight, rightHeight) + 1
    }

    return evaluate(root)
};
