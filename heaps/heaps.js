class Heap {
  #Heap = []

  getHeap() {
    return [...this.#Heap]
  }

  #leftChild(index) {
    return 2 * index + 1
  }

  #rightChild(index) {
    return 2 * index + 2
  }

  #parent(index) {
    return Math.floor((index - 1) / 2)
  }

  #swap(index1, index2) {
    [this.#Heap[index1], this.#Heap[index2]] = [this.#Heap[index2], this.#Heap[index1]]
  }

  insert(value) {
    this.#Heap.push(value)
    let curr = this.#Heap.length - 1

    while(curr > 0 && this.#Heap[curr] > this.#Heap[this.#parent(curr)]) {
      this.#swap(curr, this.#parent(curr))
      curr = this.#parent(curr)
    }
  }

  remove() {
    if(this.#Heap.length === 0) return null
    if(this.#Heap.length === 1) {
			return this.#Heap.pop()
		}
		const maxValue = this.#Heap[0]
		this.#Heap[0] = this.#Heap.pop()
		this.#sinkDown(0)

		return maxValue
  }

	#sinkDown(index) {
		let maxIndex = index
		let size = this.#Heap.length
		while(true) {
			let leftIndex = this.#leftChild(index)
			let rightIndex = this.#rightChild(index)

			if(leftIndex < size && this.#Heap[leftIndex] > this.#Heap[maxIndex]) {
				maxIndex = leftIndex
			}

			if(rightIndex < size && this.#Heap[rightIndex] > this.#Heap[maxIndex]) {
				maxIndex = rightIndex
			}

			if(maxIndex !== index) {
				this.#swap(index, maxIndex)
				index = maxIndex
			} else {
				return
			}
		}
	}
}


const myHeap = new Heap()
// myHeap.insert(99)
// myHeap.insert(72)
// myHeap.insert(61)
// myHeap.insert(58)

// console.log(myHeap.getHeap())

// myHeap.insert(100)

// console.log(myHeap.getHeap())

// myHeap.insert(75)

// console.log(myHeap.getHeap())

myHeap.insert(95)
myHeap.insert(75)
myHeap.insert(80)
myHeap.insert(55)
myHeap.insert(60)
myHeap.insert(50)
myHeap.insert(65)

console.log(myHeap.getHeap())

myHeap.remove()

console.log(myHeap.getHeap())

myHeap.remove()

console.log(myHeap.getHeap())
