class Trie {
    constructor() {
        this.children = Array(26).fill(null);
        this.wordEnd = false;
    }

    /**
     * Inserts a word into the Trie.
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        if (word === '') {
            this.wordEnd = true;
            return;
        }

        const c = this.charToInt(word.charAt(0));
        let child = this.children[c] || new Trie();
        child.insert(word.substring(1));
        this.children[c] = child;
    }

    /**
     * Searches for a word in the Trie.
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.find(word);
    }

    /**
     * Checks if a prefix exists in the Trie.
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        return this.find(prefix, false);
    }

    /**
     * Helper function to find a word or prefix.
     * @param {string} word
     * @param {boolean} [strict=true]
     * @return {boolean}
     */
    find(word, strict = true) {
        if (!strict && word.length === 0) {
            return true;
        } else if (word.length === 0 && this.wordEnd) {
            return true;
        } else if (word.length === 0) {
            return false;
        }

        const c = this.charToInt(word.charAt(0));

        if (this.children[c]) {
            let child = this.children[c];
            return child.find(word.substring(1), strict);
        } else {
            return false;
        }
    }

    /**
     * Converts a character to an integer index (0-25).
     * @param {string} c
     * @return {number}
     */
    charToInt(c) {
        return c.charCodeAt(0) - 97;
    }
}

/** 
 * Your Trie object will be instantiated and called as such:
 * let obj = new Trie();
 * obj.insert(word);
 * let param_2 = obj.search(word);
 * let param_3 = obj.startsWith(prefix);
 */

