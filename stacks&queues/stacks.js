class Node {
  constructor(val) {
    this.val = val
    this.next = null 
  }
}

class Stack {
  constructor(val) {
    const newNode = new Node(val)
    this.top = newNode
    this.length = 1 // could use height instead of length
  }

  push(val) {
    const newNode = new Node(val)
    if(this.length === 0) {
      this.top = newNode
    } else {
      newNode.next = this.top
      this.top = newNode
    }

    this.length++

    return this
  }

  pop() {
    if(this.length === 0) return undefined
    let temp = this.top
    this.top = this.top.next
    temp.next = null
    this.length--
    return temp
  }
}

let myStack = new Stack(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
// console.log(myStack.pop())
myStack.pop()
console.log('stack', myStack)