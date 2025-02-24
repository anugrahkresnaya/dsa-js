// big o : drop non-dominant terms
function logItems(n) {
     for(let i = 0; i < n; i++) { // O(n^2)
         for(let j = 0; j < n; j++) {
             console.log(i, j) 
         }       
     } 
 
     for(let k = 0; k < n; k++) { // O(n)
         console.log(k)
     }
 }
 
 logItems(10)

 // so in this code, we have two loops, one nested and one not nested. So the big o is O(n^2) + O(n) 
 // But we drop the non-dominant term, so the big o is O(n^2)