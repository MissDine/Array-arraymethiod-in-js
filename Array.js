// Array-A list of items 
// Array mathods

// .forEach() 
const numbers = [1,2,3,4,5,6]
console.log(numbers);
numbers.forEach((number, index, arr)=>{
    console.log(index, number,arr);
})
// sum of numbers 
let sum = 0
numbers.forEach((number)=>{
    sum += number
})
console.log(sum);
// Number of times a letter appears in an array
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "a"]