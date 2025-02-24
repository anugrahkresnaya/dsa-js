// big o : different terms for inputs

// function logItems(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i);
//   }

//   for (let j = 0; j < n; j++) {
//     console.log(j);
//   }
// }
// this code has two loops, but they are not nested. So the big o is O(n) + O(n) = O(2n)
// But we drop the constant, so the big o is O(n)

// so the trick interview question is that instead of passing n to the function, we pass two different inputs
function logItems(a, b) {
  for (let i = 0; i < a; i++) { // O(n)
    console.log(i);
  }

  for (let j = 0; j < b; j++) { // o(n)
    console.log(j);
  }

  // so based on the rule of big o, we add the big o of the two loops, so the big o is O(n) + O(n) = O(2n)
  // and we drop the constant, so the big o is O(n)
  // but in this case, we have two different inputs, so the big o is O(a) + O(b) = O(a + b)
  // because both variables cant be equaal to n, so we can't add them together
}

// if we use nested for loops, the big o is O(a) * O(b) = O(a * b)
// you can't use n, you actually have to use the variables a and b (different terms for inputs)
function nestedLogItems(a, b) {
  for (let i = 0; i < a; i++) { // O(a)
    for (let j = 0; j < b; j++) { // O(b)
      console.log(i, j);
    }
  }
}

logItems(3, 3);