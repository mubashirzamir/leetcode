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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return []

    let result = []
    let queue = [{ 'node': root, 'level': 0 }]

    while (queue.length !== 0) {
        let { node, level } = queue.shift()
        result[level] = node.val
        level++

        node.left && queue.push({ 'node': node.left, 'level': level })
        node.right && queue.push({ 'node': node.right, 'level': level })
    }

    return result
};
