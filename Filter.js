// filter -iterates through an array and returns a new array by removing all the other elements.
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]
const even = numbers.filter(isEven)
function isEven(number){
    return number %2 === 0
}
console.log(even);
const odd = numbers.filter(number=>number %2 ===1)
console.log(odd);

const people = [{name: 'John', age:20},{name: 'Israel', age:8},{name: 'Enid', age:25},{name: 'Mary', age:17}]
const adults = people.filter(person=>person.age>= 18)
console.log(adults);