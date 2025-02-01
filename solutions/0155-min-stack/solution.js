class MinStack {
    constructor() {
        this.s = []
        this.m = []
    }

    getLastItem = (arr) => {
        return arr[arr.length - 1]
    }

    push = (val) => {
        this.s.push(val)
        this.m.push((this.getMin() > val) ? val : this.getMin())
    }

    pop = () => {
        this.s.pop()
        this.m.pop()
    }

    top = () => {
        this.getLastItem(this.m)
        return this.getLastItem(this.s)
    }

    getMin = () => {
        return this.getLastItem(this.m) === undefined ? Infinity : this.getLastItem(this.m)
    }
}
