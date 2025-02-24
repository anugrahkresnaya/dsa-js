class HashTable {
  constructor(size = 7) { // default size is 7
    this.dataMap = new Array(size) // create an array with size of 7
  }

  _hash(key) { // underscore is a convention to show that this is a private method and should not be accessed outside of the class
    let hash = 0 // initialize hash to 0
    for(let i = 0; i < key.length; i++) {  // loop through the key
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length // get the char code of the key and multiply by 23 then get the remainder of the length of the dataMap 
    }
    return hash // return the hash
  }

  set(key, value) {
    let index = this._hash(key) // first get index to assign where address space is
    if(!this.dataMap[index]) this.dataMap[index] = [] // if address space is really empty
    this.dataMap[index].push([key, value]) // push the array to index
    return this
  }

  get(key) {
    let index = this._hash(key) // first get index of the key
    if(this.dataMap[index]) { // if there is data in the index
      for(let i = 0; i < this.dataMap[index].length; i++) { // loop through the data
        if(this.dataMap[index][i][0] === key) { // check if the current index of the data is same as key
          return this.dataMap[index][i][1] // return the value of the key
        }
      }
    }

    return undefined // if key is not found return undefined
  }

  keys() {
    let allKeys = []
    for(let i = 0; i < this.dataMap.length; i++) {
      if(this.dataMap[i]) {
        for(let j = 0; j < this.dataMap[i].length; j++) {
          allKeys.push(this.dataMap[i][j][0])
        }
      }
    }

    return allKeys
  }
}

let myHashTable = new HashTable()
// console.log(myHashTable)
// myHashTable.set('books', 100)
// myHashTable.set('bottles', 50)
// console.log('my hash table', JSON.stringify(myHashTable, null, 2))
// console.log(myHashTable.get('bottles')) // return 50
// myHashTable.get('hairs') // return undefined
myHashTable.set('bolts', 400)
myHashTable.set('washers', 100)
myHashTable.set('lumber', 1000)
console.log(JSON.stringify(myHashTable, null, 2))
console.log(myHashTable.keys())


