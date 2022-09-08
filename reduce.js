// .reduce executes a callback function and it returns a single output
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const max = numbers.reduce(callback, -Infinity)
function callback(accumulator, value){
    if(accumulator>value){
        return accumulator
    }else{
        return value
    }
    
}
console.log(max);

const store = [{name:"laptop", price:1000, count:5},{name:"desktop",price: 3000, count:4},{name:"mouse", price:100, count:10},{name:"phone", price:200, count:2}]

// Worth of all products
totalValueStore = store.reduce((acc, item)=> acc + (item.price * item.count),0)
console.log(totalValueStore);