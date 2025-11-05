/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 * 
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 * 
 */


function cloneGraph(node: _Node | null): _Node | null {
    // Keep track of duplicated nodes in a map to avoid infinite loops
    // We take advantage of the fact each node.val is unique
    // Recursively clone neighbors
    const map = new Map<number, _Node>()

    const cloner = (node: _Node | null) => {
        if (node == null) return null
        if (map.has(node.val)) return map.get(node.val)

        const duplicate = new _Node(node.val)
        map.set(node.val, duplicate)

        for (const n of node.neighbors) {
            const duplicateNeighbor = cloner(n)
            duplicate.neighbors.push(duplicateNeighbor)
        }

        return duplicate
    }

    return cloner(node)
};
