class Stack {
    constructor() {
        this.array = [];
    }
    peek() {
        return this.array[this.array.length-1];
    }
    push(value) {
        this.array.push(value);
        return this;
    }
    pop() {
        this.array.pop();
        return this;
    }
}

//Run Test
const myStack = new Stack();
myStack.push("Udemy");
myStack.push("Google");
myStack.push("Youtube");
myStack.pop();
myStack.pop();
myStack.pop();
myStack.peek();
console.log(myStack);
