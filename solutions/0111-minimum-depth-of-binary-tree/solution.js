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
 * @return {number}
 */
var minDepth = function(root) {
    // bfs
    if (!root) return 0

    let queue = [{node: root, level: 1}]
    let result = 1

    while (queue.length !== 0) {
        const {node, level} = queue.shift()
        result = level

        if (node.left) queue.push({node: node.left, level: level + 1})
        if (node.right) queue.push({node: node.right, level: level + 1})

        if (!node.left && !node.right) break
    }

    return result
};
