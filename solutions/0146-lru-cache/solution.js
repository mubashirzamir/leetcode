class LRUCache {
    constructor(capacity) {
        this.map = new Map()
        this.capacity = capacity
    }

    get = (key) => {
        if (!this.map.has(key)) return -1

        const temp = this.map.get(key)
        this.map.delete(key)
        this.map.set(key, temp)

        return temp
    }

    put = (key, value) => {
        if (this.map.has(key)) {
            this.map.delete(key)
        } else if (this.map.size >= this.capacity) {
            this.map.delete(this.map.keys().next().value)
        }

        this.map.set(key, value)
    }
}
