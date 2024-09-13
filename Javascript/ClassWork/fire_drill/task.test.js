const {sumEvenNumbers, findMax, countOddNumbers, findFirstDuplicate, reverseArray, factorial} = require("./task.js");


test("sum even numbers in array", ()=>{
	let arrayOfNumbers = [1,2,3,4,5,6,7,8]
	let result = sumEvenNumbers(arrayOfNumbers);
	expect(result).toBe(20)
})

test("find max", ()=>{
	let arrayOfNumbers = [1,2,3,4,5,6,7,8]
	let result = findMax(arrayOfNumbers)
	expect(result).toBe(8)
})

test("count odd numbers", ()=>{
	let arrayOfNumbers = [1,2,3,4,5,6,7,8]
	let result = countOddNumbers(arrayOfNumbers);
	expect(result).toBe(4)
})

test("find first duplicate", ()=>{
	let arrayOfNumbers = [1,2,3,4,5,6,7,8,9,3];
	let result = findFirstDuplicate(arrayOfNumbers);
	expect(result).toBe(3)
})

test("reverse array", ()=>{
	let arrayOfNumbers = [5];
	let result = (arrayOfNumbers);
	expect(result).toBe(5,4,3,2,1)
})

test("factorial", ()=>{
	let factorial = [1,2,3,4,5];
	let result = factorial;
	expect(result).toBe(120)
})


