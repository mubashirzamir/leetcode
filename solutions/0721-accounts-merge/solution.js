/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function (accounts) {
    let adj = buildAdj(accounts)
    let mailToNameMap = buildMailToEmailMap(accounts)

    return traverse(adj, mailToNameMap)
};

const traverse = (adj, mailToNameMap) => {
    const result = [];
    const visited = new Set();

    const dfs = (email, list = []) => {
        if (visited.has(email)) return list;

        visited.add(email);
        list.push(email);

        const neighbours = adj.get(email);
        for (const neighbour of neighbours) {
            dfs(neighbour, list);
        }

        return list;
    };

    for (const [email] of adj.entries()) {
        if (!visited.has(email)) {
            const account = dfs(email);
            account.sort();
            result.push([mailToNameMap.get(email), ...account]);
        }
    }

    return result;
};

const buildMailToEmailMap = (accounts) => {
    let mailToNameMap = new Map()

    for (let i = 0; i < accounts.length; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            mailToNameMap.set(accounts[i][j], accounts[i][0])
        }
    }

    return mailToNameMap
}

const buildAdj = (accounts) => {
    let adj = new Map();

    for (let i = 0; i < accounts.length; i++) {
        const emails = accounts[i].slice(1);

        for (const email of emails) {
            if (!adj.has(email)) {
                adj.set(email, new Set());
            }
            for (const otherEmail of emails) {
                if (otherEmail !== email) {
                    adj.get(email).add(otherEmail);
                }
            }
        }
    }

    return adj;
}
