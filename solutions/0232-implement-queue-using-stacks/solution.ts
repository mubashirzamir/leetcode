class MyQueue {
    forwardStack = []
    backwardStack = []

    inverted = false

    constructor() {
    }

    push(x: number): void {
        if (this.inverted) this._invert()
        this.forwardStack.push(x)
    }

    pop(): number {
        if (!this.inverted) this._invert()
        return this.backwardStack.pop()
    }

    peek(): number {
        if (!this.inverted) this._invert()
        return this.backwardStack[this.backwardStack.length - 1]
    }

    empty(): boolean {
        return this.forwardStack.length === 0 && this.backwardStack.length === 0
    }

    _invert() {
        if (!this.inverted) this._inverter(this.forwardStack, this.backwardStack)
        else this._inverter(this.backwardStack, this.forwardStack)

        this.inverted = !this.inverted
    }

    _inverter(from: number[], to: number[]) {
        while (from.length !== 0) {
            to.push(from.pop())
        }
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
