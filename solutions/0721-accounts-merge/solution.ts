function accountsMerge(accounts: string[][]): string[][] {
    // email -> { name, neighbors } — builds an adjacency list where shared emails connect accounts
    let map = new Map<string, any>()

    for (const acc of accounts) {
        const name = acc[0]
        const emails = acc.slice(1, acc.length)

        for (const email of emails) {
            if (!map.has(email)) {
                // first time seeing this email — seed it with all sibling emails as neighbors
                map.set(email, { name: name, neighbors: new Set(emails) })
            } else {
                // email already exists — merge in new neighbors (union of both sets)
                const existing = map.get(email).neighbors
                map.set(email, { name: name, neighbors: new Set([...existing, ...emails]) })
            }
        }
    }

    let visited = new Set<string>()
    let result = []

    // collects all emails in a connected component via DFS
    const dfs = (email, item) => {
        if (visited.has(email)) return

        visited.add(email)
        item.push(email)
        const neighbors = map.get(email).neighbors

        for (const n of neighbors) {
            dfs(n, item)
        }
    }

    for (const [email, { name, _ }] of map) {
        if (visited.has(email)) continue

        // each unvisited email is the start of a new merged account
        const item = []
        dfs(email, item)
        result.push({ name, emails: item })
    }

    // flatten and sort emails within each account (name goes first)
    return result.map((item, index) => {
        return [item.name, ...item.emails.sort()]
    })
};
