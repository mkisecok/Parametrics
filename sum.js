// Create a function sum which accepts any amount of numbers and return the sum of their addition

const sum = (...args) => {
    let total = 0;

    for( let arg of args){

        total += arg;
    
    }

   return total ;
};

console.log(sum(1)); // -> 1
console.log(sum(1, 15)); // -> 16
console.log(sum(25, 25, 20)); // -> 70
