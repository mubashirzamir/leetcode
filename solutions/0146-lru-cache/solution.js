// Linked Hashmap
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.map = new Map()

        this.head = new Node(null, null) // dummy head
        this.tail = new Node(null, null) // dummy tail

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    get(key) {
        if (!this.map.has(key)) return -1

        const node = this.map.get(key)

        this._remove(node)
        this._append(node)

        return node.value
    }

    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key)
            this._remove(node)
        } else if (this.map.size >= this.capacity) {
            const node = this.head.next
            this._remove(node)
            this.map.delete(node.key)
        }

        const node = new Node(key, value)
        this._append(node)
        this.map.set(key, node)
    }

    _remove(node) {
        node.next.prev = node.prev
        node.prev.next = node.next
    }

    _append(node) {
        node.next = this.tail
        node.prev = this.tail.prev
        node.prev.next = node
        this.tail.prev = node
    }

}

class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

