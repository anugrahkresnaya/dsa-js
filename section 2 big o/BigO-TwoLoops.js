// big o : drop constants
function logItems(n) { // O(n)
     for(let i = 0; i < n; i++) {
        console.log(i) 
     }
 
     for(let j = 0; j < n; j++) {
        console.log(j) 
     }       
 }
 
 logItems(3)


 // so in this case, we have two loops, which means we have O(n) + O(n) = O(2n). But we drop the constant, so the big o is O(n)`
 // the rule is we simply ignore the constants (constant multiplier (number 2 for example beside n)), so the big o is O(n)