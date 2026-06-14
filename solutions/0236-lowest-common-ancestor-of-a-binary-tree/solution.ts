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
    // Make paths to each node and store them in array
    // Iterate over the arrays to find the LCA

    const pathP = []
    const pathQ = []

    const buildPath = (node: TreeNode | null, target: number, path: TreeNode[]): boolean => {
        if (!node) return false

        path.push(node)

        if (node.val === target) return true
        if (buildPath(node?.left, target, path)) return true
        if (buildPath(node?.right, target, path)) return true

        path.pop()

        return false
    }

    buildPath(root, p.val, pathP)
    buildPath(root, q.val, pathQ)

    let result = root
    for (let i = 0; i < pathP.length; i++) {
        if (pathP[i].val === pathQ[i]?.val) result = pathP[i]
    }

    return result
};
