const {add, subtract, evenNumbers, multiply, divide, oddNumbers} = require ("./OddAndEvenNumbers.js")

	let numberOne = 2;
	let numberTwo = 29;


test("Add two numbers", ()=>{
	let result = add(numberOne, numberTwo);
	expect(result).toBe(31);
})

test("subtract two numbers", ()=>{
	let result = subtract(numberTwo, numberOne);
	let expected = 27;
	expect(result).toBe(expected)
	
})

test("return evenNumbers", ()=>{
	let arraysOfNumbers = [1,2,3,4,5,6];
	let result = evenNumbers(arraysOfNumbers);
	expect(result).toEqual([2,4,6]);

})

test("multiply two numbers", ()=>{
	let result = multiply(numberOne, numberTwo);
	expect(result).toBe(58);

})

test("divide two numbers", ()=>{
	let result = divide(numberTwo, numberOne);
	expect(result).toBe(14.5);

})	

test("return oddNumbers", ()=>{
	let arraysOfNumbers = [1,2,3,4,5,6];
	let result = oddNumbers(arraysOfNumbers);
	expect(result).toEqual([1,3,5]);

})