type Item = {
    value: number
    min: number
}

class MinStack {
    stack: Item[] = []

    constructor() {
    }

    push(val: number): void {
        this.stack.push({
            value: val,
            min: Math.min(val, this.getMin())
        })
    }

    pop(): void {
        this.stack.pop().value
    }

    top(): number {
        return this._getTopItem().value
    }

    getMin(): number {
        if (this.stack.length === 0) return Infinity

        return this._getTopItem().min
    }

    _getTopItem(): Item {
        return this.stack[this.stack.length - 1]
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
