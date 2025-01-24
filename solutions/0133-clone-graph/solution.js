/**
 * // Definition for a _Node.
 * function _Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
    if (node === null) {
        return null
    }

    let seen = new Map();

    const build = (n) => {
        let copy = new _Node()

        copy.val = n.val
        seen.set(n.val, copy)

        copy.neighbors = n.neighbors.map((neighbor) => {
            if (!seen.has(neighbor.val)) {
                seen.set(neighbor.val, build(neighbor));
            }

            return seen.get(neighbor.val);
        });

        return copy
    }

    return build(node)
};
