let array = [1,2,3,4,5]
let sum = 0;
let avg = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

avg = sum/array.length;

var array = document.getElementById("array")

console.log(sum)
console.log(avg)