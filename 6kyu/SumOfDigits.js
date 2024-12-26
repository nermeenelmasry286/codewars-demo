// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


//my solution

function digitalRoot(n) {
    var sum = 0;
        if(n<10){ return n;}
        else{
            while (n >= 10) { 
                sum = 0; 
                var str = String(n);
    
                for (var i = 0; i < str.length; i++) {
                    sum += Number(str[i]); 
                }
        
            n = sum;
            }
            return n; 
        }
    }

    //best soluton
    function digital_root(n) {
        return (n - 1) % 9 + 1;
      }