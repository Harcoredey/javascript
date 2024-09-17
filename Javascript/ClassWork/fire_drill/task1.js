//Task1
const book = {
	title: 'The Great Gatsby',
	author: 'F.Scott Fitzgerald',
	yearPublished: 1925,
}
     const{title, author} = book;
     doc = title + ' by ' + author;
console.log(doc);



//function print(book){

//const{title, author} = book;
//}
//console.log(book);

//Task2
const car = {make:'Toyota', model:'camry', year:2021};
	for (let attribute in car) {
	}
	console.log(car);

//Task3
const counter = {
	count:3,
	step:5,
	increment:function(){
	return this.count += this.step
	}
	//decrement:function(){
	//return this.count -= this.step
	//}
}
console.log(counter.increment())

//Task4
const human = {
	firstName:'Ayo',
	lastName:'Ola',
	fullName:function(){
	return this.firstName + " " + this.lastName
 	}
}
console.log(human.fullName());

//Task5
const person = {
	firstName:'John',
	lastName:'Doe',
	age:25
};
	function humanPerson(person){
	return this.firstName + this.lastName + this.age
	
}
console.log(humanPerson(person));

	







