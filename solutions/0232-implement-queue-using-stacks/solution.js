
var MyQueue = function() {
    this.firstStack =  []
    this.secondStack = [] 
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.firstStack.unshift(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
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
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.firstStack[this.firstStack.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.firstStack.length === 0
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
