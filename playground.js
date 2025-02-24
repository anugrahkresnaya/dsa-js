class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkedList {
  constructor(val) {
    const newNode = new Node(val)
    this.head = newNode
    this.tail = this.head
    this.length = 1
  }

  push(val) {
    const newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    this.length++
    return this
  }

  pop() {
    if(!this.head) return undefined
    let temp = this.head
    let prev = this.head
    while(temp.next) {
      prev = temp
      temp = temp.next
    }

    this.tail = prev
    this.tail.next = null
    this.length--
    if(this.length === 0) {
      this.head = null
      this.tail = null
    }

    return temp
  }

  shift() {
    if(!this.head) return undefined
    let curr = this.head
    this.head = this.head.next
    this.length--
    if(this.length === 0) {
      this.tail = null
    }
    curr.next = null
    return curr
  }

  unshift(val) {
    const newNode = new Node(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length++
    return this
  }

  get(index) {
    if(index < 0 || index >= this.length) return undefined
    for(let i = 0; i < index; i++) {
      temp = temp.next
    }

    return temp
  }

  set(index, val) {
    let curr = this.get(index)
    if (curr) {
      curr.value = val
      return true
    }

    return false
  }
}