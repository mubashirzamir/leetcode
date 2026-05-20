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

function levelOrder(root: TreeNode | null): number[][] {
    if (!root) return []

    let result = []
    let queue = [{ node: root, level: 0 }]

    while (queue.length !== 0) {
        const { node, level } = queue.shift()

        if (node.left) queue.push({ node: node.left, level: level + 1 })
        if (node.right) queue.push({ node: node.right, level: level + 1 })

        if (result[level]) result[level].push(node.val)
        else result[level] = [node.val]
    }

    return result
};
