function sumEvenNumbers(arr){
	let evenNumbers = 0;
	for(let number of arr){
	   if(number % 2 == 0)
	    evenNumbers += number;
	}
return evenNumbers;

}

function findMax(arr){
	let maxNumber = 0;
	for(let number of arr){
	   if(number > maxNumber)
	     maxNumber = number;
	}
return maxNumber;
}

function countOddNumbers(arr){
	let oddNumbers = 0;
	for(let odd in arr){
	   if(odd % 2 == 1)
	       oddNumbers++
	}
return oddNumbers;
}

//function ifPrime(){
//	if(number < 1){
//	  return false;
//	}
//	for (let index = 2; index <= number /2; index++){
//	   if(number/index){
//           return false;
//	   }
//	}
//return true;
//}

//console.log(index)

function findFirstDuplicate(arr){
	for(let index of arr){
	   for(let count = arr.indexOf(index)+1; count < arr.length; count++){
	      if(index == arr[count]) {
	         return index;
	      }
	   }
	}

return -1;
}	

function reverseArray(arr){
	let num = 0;
	let reverseArray = 0;
	while(num!=0) {
		reverseArray = reverseArray *10 + num%10;
		num = num /10;
	}

return reverseArray;
}

function factorial(number){
	if (number < 0) {
    	}
    	 if (number === 0 || number === 1) {
            return 1;
    }
return number * factorial(number - 1);
}



module.exports = {sumEvenNumbers, findMax, countOddNumbers, findFirstDuplicate, reverseArray, factorial};


