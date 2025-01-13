class MyQueue {
    firstStack: Array<number>
    secondStack: Array<number>

    constructor() {
        this.firstStack = []
        this.secondStack = []
    }

    push(x: number): void {
        this.firstStack.unshift(x)
    }

    pop(): number {
        if (this.firstStack.length === 0) {
            return undefined
        }

        while (this.firstStack.length > 1) {
            this.secondStack.unshift(this.firstStack.shift())
        }

        const result = this.firstStack.shift()

        while (this.secondStack.length !== 0) {
            this.firstStack.unshift(this.secondStack.shift())
        }

        return result
    }

    peek(): number {
        if (this.firstStack.length === 0) {
            return undefined
        }

        let result = 0
        while (this.firstStack.length !== 0) {
            if (this.firstStack.length === 1) {
                result = this.firstStack[0]
            }

            this.secondStack.unshift(this.firstStack.shift())
        }

        while (this.secondStack.length !== 0) {
            this.firstStack.unshift(this.secondStack.shift())
        }

        return result
    }

    empty(): boolean {
        return this.firstStack.length === 0
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
