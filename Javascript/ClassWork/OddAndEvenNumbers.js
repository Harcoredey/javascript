//let arrayOfNumber = [2,1,5,7,8];
//	for (let index in arrayOfNumbers) {
//	console.log(arrayOfNumbers[index]);


//let arr = [1,2,3,4];

//arr.push(3);

//console.log(arr);

//output=>[1,2,3,4]



function add(numberOne, numberTwo){
	let result = numberOne + numberTwo
	return result;
}

function subtract(numberTwo, numberOne){
	return numberTwo - numberOne;

}

function evenNumbers(arr){
	let newArray = [];
	for(let number of arr){
	   if(number % 2 == 0){
	   newArray.push(number)
	   }
	}
	return newArray;
}

function multiply(numberOne, numberTwo){
	let result = numberOne * numberTwo
	return result;
}

function divide(numberTwo, numberOne){
	let result = numberTwo / numberOne
	return result;
}

function oddNumbers(arr){
	let newArray = [];
	for(let number of arr){
	   if(number % 2 !=0){
	   newArray.push(number)
	   }
	}
	return newArray;
}

module.exports = {add, subtract, evenNumbers, multiply, divide, oddNumbers};


