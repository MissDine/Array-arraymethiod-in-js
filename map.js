// .map- executes every element in an array and returns a new array
const numbers = [1,2,3,4,5]
// Doubling the number
numbers.map((number,index, arr)=>{
    console.log(number*2);
})
// Multiplying the new value by the index
numbers.map((number,index)=>{
    console.log(number*index);
})