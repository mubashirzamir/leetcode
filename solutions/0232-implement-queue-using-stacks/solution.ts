enum Direction {
    Forward,
    Backward
}

class MyQueue {
    queue: number[] = []
    aux: number[] = []
    direction: Direction = Direction.Forward
    
    constructor() {
    }

    push(x: number): void {
        if (this.direction === Direction.Backward) this.reverse()

        this.queue.push(x)
    }

    pop(): number {
        if (this.direction !== Direction.Backward) this.reverse()

        return this.aux.pop()
    }

    peek(): number {
        if (this.direction !== Direction.Backward) this.reverse()

        return this.aux[this.aux.length - 1]
    }

    empty(): boolean {
        return this.queue.length === 0 && this.aux.length === 0
    }

    reverse(): void {
        if (this.direction === Direction.Forward) {
            while (this.queue.length !== 0) {
                this.aux.push(this.queue.pop())
            }

            this.direction = Direction.Backward
        } else {
            while (this.aux.length !== 0) {
                this.queue.push(this.aux.pop())
            }

            this.direction = Direction.Forward
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
