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

function invertTree(root: TreeNode | null): TreeNode | null {
    // bfs
    // flip left and right nodes

    if (!root) return null

    const queue: TreeNode[] = [root]

    while (queue.length !== 0) {
        let current = queue.pop()

        const left = current?.left
        const right = current?.right

        current.left = right
        current.right = left

        if (current?.left) queue.push(current.left)
        if (current?.right) queue.push(current.right)
    }

    return root 
};
