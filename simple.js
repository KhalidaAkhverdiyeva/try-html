// Creating an array
let fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

// Accessing elements in the array
console.log(fruits[0]); // Output: Apple

// Modifying elements in the array
fruits[1] = 'Grapes';
console.log(fruits); // Output: ['Apple', 'Grapes', 'Orange', 'Mango']

// Adding elements to the end of the array
fruits.push('Pineapple');
console.log(fruits); // Output: ['Apple', 'Grapes', 'Orange', 'Mango', 'Pineapple']

// Removing the last element from the array
let removedFruit = fruits.pop();
console.log(removedFruit); // Output: Pineapple
console.log(fruits); // Output: ['Apple', 'Grapes', 'Orange', 'Mango']