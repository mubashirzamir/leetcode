// At each stage, there are 26 choices
class Trie {
    child: (Trie | null)[] = Array(26).fill(null)
    end: boolean = false

    constructor() {
    }

    insert(word: string): void {
        if (word.length === 0) return

        const l = word.charAt(0).charCodeAt(0) - 97

        if (this.child[l] === null) this.child[l] = new Trie()
        if (word.length === 1) this.child[l].end = true

        this.child[l].insert(word.substring(1, word.length))
    }

    search(word: string): boolean {
        return this.searcher(word, true)
    }

    startsWith(prefix: string): boolean {
        return this.searcher(prefix)
    }

    searcher(word: string, strict: boolean = false): boolean {
        if (word.length === 0) return true

        const l = word.charAt(0).charCodeAt(0) - 97

        if (this.child[l] === null) return false
        if (word.length === 1) return strict ? this.child[l].end : true

        return this.child[l].searcher(word.substring(1, word.length), strict)
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
