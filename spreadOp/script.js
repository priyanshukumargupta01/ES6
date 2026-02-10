
const num1 = [1,2,3,4]
const nam = "Priyanshu"
const num2 = [12,2,32,4]
const user={
    name :"happpy",
    age: 69
}

// console.log((num1.concat(num2)));
const join = [...num1, ...num2, ...nam]

const updatedUser = {...user, home:"india"}
console.log(join);
console.log(updatedUser);


function add(){
    let sum = 0;
    for(let i = 0;i<arguments.length; i++){
       sum = sum + arguments[i]        
    }
    return sum
}
add(5,7845)