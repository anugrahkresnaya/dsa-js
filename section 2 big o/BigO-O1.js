// big o : o(1) - constant time complexity
function addItems (n) { // O(1)
  return n + n // O(1) because there is only one operation
}

function addItems2 (n) { // O(2)
  return n + n + n // O(2) because there are 2 operation
}

// so in this case, we have two operations, which means we have O(1) + O(1) = O(2). But we drop the constant, so the big o is O(1)
// the number of operations doesn't change as n changes, so the big o is O(1)