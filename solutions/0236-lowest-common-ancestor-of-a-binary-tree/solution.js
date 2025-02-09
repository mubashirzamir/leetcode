/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const dfs = (root, target, stackTrace = []) => {
        if (root === null) return null

        stackTrace.push(root)

        if (root.val === target) return stackTrace

        const leftPath = dfs(root.left, target, stackTrace);
        if (leftPath) return leftPath;

        const rightPath = dfs(root.right, target, stackTrace);
        if (rightPath) return rightPath;

        stackTrace.pop()

        return null
    }

    let pStack = dfs(root, p.val)
    let qStack = dfs(root, q.val)

    if (pStack.length < qStack.length) {
        const temp = pStack
        pStack = qStack
        qStack = temp
    }

    for (let i = qStack.length - 1; i >= 0; i--) {
        if (qStack[i] === pStack[i]) return qStack[i]
    }

    return undefined
};
