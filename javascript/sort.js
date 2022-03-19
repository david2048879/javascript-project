let numbers=[1,5,8,6,3,4,2,10,11,23];

numbers.sort(compare);

console.log(numbers)

function compare(x,y){
    return x-y;
}