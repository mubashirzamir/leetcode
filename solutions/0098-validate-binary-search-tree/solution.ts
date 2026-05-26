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

function isValidBST(root: TreeNode | null): boolean {
    const validate = (root: TreeNode | null, lb: number, ub: number) => {
        // Leaf node has been reached and we are in a valid BST
        if (!root) return true

        if (root.val <= lb || root.val >= ub) return false

        return validate(root.left, lb, root.val) && validate(root.right, root.val, ub)
    }

    return validate(root, -Infinity, Infinity)
};
