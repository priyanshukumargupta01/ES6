const num1 = [1, 2, 3, 4, 5]

function add (...nums){
    console.log(nums);
    let sum = 0;
    for(let i = 0;i<nums.length;i++){
        sum = sum + nums[i]
    }
    return sum ;
}

console.log(add(2,5,2,456,7654));



