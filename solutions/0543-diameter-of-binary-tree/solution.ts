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

function diameterOfBinaryTree(root: TreeNode | null): number {
    // diameter at any node is height of left subtree + height of right subtree
    // keep a max variable to keep track of max height
    // evaluate subtree heights at each stage    

    let max = 0

    const evaluate = (node: TreeNode | null) => {
        if (node === null) return 0
        if (node.left === null && node.right === null) return 1

        const leftHeight = evaluate(node.left)
        const rightHeight = evaluate(node.right)
        max = Math.max(max, leftHeight + rightHeight)

        return Math.max(leftHeight, rightHeight) + 1
    }

    evaluate(root)

    return max
};
