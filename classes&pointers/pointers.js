let num = 1
let num2 = num

console.log(num, num2) // 1, 1

num = 10

console.log(num, num2) // 10, 1

// so when we change num, num2 doesn't change because num2 is a copy of num

// let's try with pointers

let obj = { value : 1 }
let obj2 = obj

console.log(obj, obj2) // { value: 1 }, { value: 1 }

obj.value = 10
console.log(obj, obj2) // { value: 10 }, { value: 10 }