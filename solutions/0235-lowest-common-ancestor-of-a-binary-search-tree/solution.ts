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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const buildPath = (node: TreeNode, target: TreeNode, path: TreeNode[] = []) => {
        path.push(node)

        if (node.val < target.val) return buildPath(node.right, target, path)
        else if (node.val > target.val) return buildPath(node.left, target, path)
        else return path
    }

    const pathP = buildPath(root, p)
    const pathQ = buildPath(root, q)

    let i = 0, j = 0

    while (pathP[i] === pathQ[j]) {
        if (i < pathP.length - 1) i++
        if (j < pathQ.length - 1) j++
    }

    return i >= j ? pathP[i - 1] : pathQ[j - 1]
};
