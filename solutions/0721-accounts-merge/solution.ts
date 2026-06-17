/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    const uf = new UnionFind()
    const emailToName = {} // Map email to account name

    // Step 1: Union all emails in the same account
    for (const account of accounts) {
        const [name, ...emails] = account
        for (const email of emails) {
            emailToName[email] = name // Map email to name
            uf.union(emails[0], email) // Union first email with the rest
        }
    }

    // Step 2: Group emails by their root parent
    const groups: Record<string, string[]> = {}
    for (const email in emailToName) {
        const root = uf.find(email);
        if (!groups[root]) groups[root] = []
        groups[root].push(email)
    }

    // Step 3: Sort and build result
    let result = []

    for (const [parent, children] of Object.entries(groups)) {
        result.push([emailToName[parent], ...children.sort()])
    }

    return result
};

class UnionFind {
    parent: Object

    constructor() {
        this.parent = {}
    }

    // Return parent
    // C -> B, B -> A, A -> A. Find C.
    // We have to path compress here
    find(x) {
        if (this.parent[x] === x) return x

        this.parent[x] = this.find(this.parent[x])

        return this.parent[x]
    }

    // Point y's parent to x's parent
    union(x, y) {
        if (!(x in this.parent)) this.parent[x] = x
        if (!(y in this.parent)) this.parent[y] = y

        const px = this.find(x)
        const py = this.find(y)

        if (px != py) this.parent[py] = px
    }
}
