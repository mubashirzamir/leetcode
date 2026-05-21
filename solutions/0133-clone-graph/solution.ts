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
    // dfs

    if (!node) return null

    // We take advantage of the fact each node.val is unique and sequential
    const tracker = []

    const clone = (node: Node) => {
        if (tracker[node.val]) return tracker[node.val]

        const cloned = new Node(node.val)
        tracker[node.val] = cloned

        for (const neighbor of node.neighbors) {
            const clonedNeighbor = clone(neighbor)
            cloned.neighbors.push(clonedNeighbor)
        }

        return cloned
    }

    return clone(node)
};
