function logItems(n) { // o(n^2)
     for(let i = 0; i < n; i++) {
         for(let j = 0; j < n; j++) {
             console.log(i, j) 
         }       
     } 
 }
 
 logItems(10)

 // so in this code, we have nested loops, which means we have O(n) * O(n) = O(n^2) (quadratic time complexity)