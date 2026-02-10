
const num1 = [1,2,3,4]
const nam = "Priyanshu"
const num2 = [12,2,32,4]

// console.log((num1.concat(num2)));
const join = [...num1, ...num2, ...nam]

console.log(join);
