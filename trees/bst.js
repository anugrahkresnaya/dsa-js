class Node {
  constructor(val) {
    this.val = val
    this.right = null
    this.left = null
  }
}

class BST {
  constructor() {
    this.root = null
  }

  insert(val) {
    const newNode = new Node(val)
    if (!this.root) {
      this.root = newNode
      return this
    }
    let temp = this.root
    while(true) {
      if(newNode.val === temp.val) return undefined
      if(newNode.val < temp.val) {
        if(temp.left === null) {
          temp.left = newNode
          return this
        }
        temp = temp.left
      } else {
        if(temp.right === null) {
          temp.right = newNode
          return this
        }
        temp = temp.right
      }
    }
  }

  contains(val) {
    if(!this.root) return false
    let temp = this.root

    while(temp) {
      if(val < temp.val) {
        temp = temp.left
      } else if (val > temp.val) {
        temp = temp.right
      } else {
        return true
      }
    }

    return false
  }
}

let myBst = new BST()
myBst.insert(47)
myBst.insert(21)
myBst.insert(76)
myBst.insert(18)
myBst.insert(27)
myBst.insert(52)
myBst.insert(82)
// console.log(JSON.stringify(myBst, null, 2))
console.log(myBst.contains(26))