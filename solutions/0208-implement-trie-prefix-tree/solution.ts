class TrieNode {
    children: Array<TrieNode | null> = Array(26).fill(null)
    end = false
}

class Trie {
    root = new TrieNode()

    insert(word: string) {
        let node = this.root

        for (const ch of word) {
            const idx = ch.charCodeAt(0) - 97

            if (!node.children[idx]) {
                node.children[idx] = new TrieNode()
            }

            node = node.children[idx]!
        }

        node.end = true
    }

    search(word: string): boolean {
        let node = this.root

        for (const ch of word) {
            const idx = ch.charCodeAt(0) - 97

            if (!node.children[idx]) return false

            node = node.children[idx]!
        }

        return node.end
    }

    startsWith(prefix: string): boolean {
        let node = this.root

        for (const ch of prefix) {
            const idx = ch.charCodeAt(0) - 97

            if (!node.children[idx]) return false

            node = node.children[idx]!
        }

        return true
    }
}
