function calculate(){
	return{
		add:function(a,b){
			return a * b;
		},
		subtract:(a,b)=>{
			return a - b;
		}
	};
};

let result = calculate();
console.log(result.add(2,1));
console.log(calculate(2,3));

let total = 0, count = 1;
while (count <= 10) {
total += count;
count += 1;
}
console.log(total);
// → 55

console.log(sum(range(1, 10)));
// → 55