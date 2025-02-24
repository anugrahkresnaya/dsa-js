class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    // create a new node
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    const newNode = new Node(value)
    if(!this.head) { // if there is no head
      this.head = newNode // the new node will be the head
      this.tail = newNode // the new node will also be the tail
    } else {
      this.tail.next = newNode // so we can put the new node at the end of the list
      this.tail = newNode // this will make the new node the tail
    }

    this.length++ // increment the length of the list
    return this // return the list
  }
  
  pop() {
    if(!this.head) return undefined // if there is no head return undefined
    let temp = this.head // this will keep track of the head
    let pre = this.head // this will keep track of the node before the last node
    while(temp.next) { // this gonna loop through the list
      pre = temp // this will keep track of the node before the last node
      temp = temp.next // this will keep track of the last node
    }
    this.tail = pre // this will make the node before the last node the tail
    this.tail.next = null // this will remove the last node
    this.length-- // this will decrement the length of the list
    if(this.length === 0) { // if the length of the list is 0
      this.head = null // this will make the head null
      this.tail = null// this will make the tail null
    }

    return temp // return the last node
  }

  unshift(value) {
    const newNode = new Node(value) // create a new node to put on the first node
    if(!this.head) { // if we dont have node
      this.head = newNode // assign head to new node
      this.tail = newNode // assign tail to new node
    } else { // if we have nodes
      newNode.next = this.head // this will put existing nodes to the next of new node
      this.head = newNode // and this will assign new node to be head
    }

    this.length++ // increase the length with increment
    return this // return list
  }

  shift() {
    if (!this.head) return undefined // if we dont have node return undefined
    let temp = this.head // this will keep track of the head with temp variable
    this.head = this.head.next // this will make the next node the head
    this.length-- // this will decrement the length of the list
    if(this.length === 0) { // if the length of the list is 0
      this.tail = null // make the tail null
    }
    temp.next = null // remove the first node
    return temp // return the removed node
  }

  get(index) {
    if (index < 0 || index >= this.length) return undefined // if the index is less than 0 or greater than the length of the list return undefined
    let temp = this.head // this will keep track of the head
    for (let i = 0; i < index; i++) { // loop through the list
      temp = temp.next // move to the next node
    }

    return temp // return the node at the index
  }

  set(index, value) {
    let temp = this.get(index) // get the node at the index
    if (temp) { // if the node exists
      temp.value = value // set the value of the node to the new value
      return true // return true if the value is set
    }

    return false // return false if the value is not set
  }

  insert(index, value) {
    if (index === 0) return this.unshift(value)
    if (index === this.length) return this.push(value)
    if (index < 0 || index >= this.length) return false

    const newNode = new Node(value) // make a new node with desired value
    let temp = this.get(index - 1) // track the node before the index
    newNode.next = temp.next // assign the next node after new node
    temp.next = newNode // put new node after temp, like move the previous node on the index to the next index

    this.length++
    return true
  }

  remove(index) {
    if (index === 0) return this.shift() // if the index is 0 remove the first node
    if (index === this.length - 1) return this.pop() // if the index is the last index remove the last node
    if (index < 0 || index > this.length) return false // if the index is less than 0 or greater than the length of the list return false

    const before = this.get(index - 1) // get the node before the index
    let temp = before.next // get the node on the index

    before.next = temp.next // assign the next node after the node on the index to the node before the index
    temp.next = null // remove the node on the index
    this.length-- // decrement the length of the list
    return temp // return the removed node or we can return true
  }

  reverse() {
    let temp = this.head
    this.head = this.tail
    this.tail = temp

    let next = temp.next
    let prev = null
    
    for (let i = 0; i < this.length; i++) {
      next = temp.next // set next to the next node of temp
      temp.next = prev // set the next node of temp to prev because we are reversing the list (this is what we need to reverse pointer to the next node)
      prev = temp // set prev to temp so we can move to the next node
      temp = next // set temp to next so we can move to the next node
    }

    return this
  }

  // getHead() {
  //   console.log('head', this.head)
  //   console.log('head next', this.head.next)
  // }
}

let myLinkedList = new LinkedList(7)
myLinkedList.push(4)
myLinkedList.push(8)
myLinkedList.push(9)
myLinkedList.getHead()
console.log(myLinkedList)
myLinkedList.reverse()
console.log('after reverse', myLinkedList)