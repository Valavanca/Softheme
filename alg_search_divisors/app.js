var stdin = process.openStdin();
console.log('Enter a number:');
stdin.addListener("data", function(d) {
    var number = Number(d.toString().trim());
    console.log('Dividers:')
    console.log(numDivisors(number));
  });

function numDivisors(num) {
    var primeArray = primeNum(num);
    var divArray = [];
    for(var i = 0; i<num; i++) {
        if(primeArray[i]=== 1) {                
            //console.log('divArray:', i);
           if(num%i === 0)
               divArray.push(i); // record array with prime divisors of the user number
        }
    }
    var length = divArray.length;
    multArray(1, length, divArray);  // assembly possible combinations dividers
    divArray.push(num); // add user number
    return divArray; // array with all dividers
}

function primeNum(num) { // finds prime numbers to a specific number (num). Ratio for the array corresponding to these prime numbers.
    var primeNum = [num];
    for(var i = 1; i<num; i++)
        primeNum[i]=1;
    primeNum[0]=0;
    
    var sqrt = Math.floor(Math.sqrt(num))+1;
    
    for(i=2; i<sqrt; i++) {
        
       if(primeNum[i]=='1') {
           for(var j = i+i; j<num; j=j+i)
               primeNum[j]=0;
               }
    }
    //console.log(primeNum);
    return primeNum;
}

function multArray(start, finish, arr) { // function for multiplying (assembly) numbers in the array without repeating
   if(start<finish) {
    for(var k = start+1; k<finish; k++) {
        arr.push(arr[start]*arr[k]);
    }
    multArray(start+1, finish, arr);
   }
}