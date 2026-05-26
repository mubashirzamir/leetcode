type Element = {
    val: number,
    min: number
}

class MinStack {
    stack: Element[]

    constructor() {
        this.stack = []
    }

    push(val: number): void {
        this.stack.push({
            val: val,
            min: Math.min(val, this.getMin())
        })
    }

    pop(): void {
        this.stack.pop().val
    }

    top(): number {
        return this.stack[this.stack.length - 1].val
    }

    getMin(): number {
        if (this.stack.length === 0) return Infinity

        return this.stack[this.stack.length - 1].min
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
