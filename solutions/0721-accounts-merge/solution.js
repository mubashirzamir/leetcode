/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    const uf = new UnionFind();
    const emailToName = {}; // Map email to account name

    // Step 1: Union all emails in the same account
    for (const account of accounts) {
        const [name, ...emails] = account;
        for (const email of emails) {
            emailToName[email] = name; // Map email to name
            uf.union(emails[0], email); // Union first email with the rest
        }
    }

    // Step 2: Group emails by their root parent
    const groups = {};
    for (const email in emailToName) {
        const root = uf.find(email);
        if (!groups[root]) groups[root] = [];
        groups[root].push(email);
    }

    // Step 3: Sort and format the result
    const result = [];
    for (const root in groups) {
        const name = emailToName[root];
        const sortedEmails = groups[root].sort();
        result.push([name, ...sortedEmails]);
    }

    return result;
};

class UnionFind {
    constructor() {
        this.parent = {}
    }

    find = (x) => {
        if (this.parent[x] === undefined) return undefined
        
        if (this.parent[x] !== x) {
            this.parent[x] = this.find(this.parent[x]) // path compression
            return this.parent[x]
        }

        return x
    }

    union = (x, y) => {
        if (!(x in this.parent)) this.parent[x] = x;
        if (!(y in this.parent)) this.parent[y] = y;

        const px = this.find(x)
        const py = this.find(y)

        if (px !== py) this.parent[py] = px;
    }
}
