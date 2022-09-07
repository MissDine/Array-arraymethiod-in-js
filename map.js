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

const items = [{name:"laptop", price:1000, count:5},{name:"desktop",price: 3000, count:4},{name:"mouse", price:100, count:10},{name:"phone", price:200, count:2}]

const totalProductsValue = items.map((item)=>{
    console.log(item.name, item.price*item.count);
})