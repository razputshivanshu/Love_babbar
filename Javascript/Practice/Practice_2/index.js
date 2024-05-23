//Write a function called 'greet' that takes a name parameter and logs a greeting message to the console.

// let greethere = (str)=>{

//   console.log(`You can grind upto 3 AM ${str}  :)!! So keep going`)

// };

// greethere("Mr. Shivanshu Chauhan")




//2. Write a function called 'getSquare' that takes a number parameter and returns its square.

// let squareHere = (num)=>{
//   return num*num;

// };

// console.log(squareHere(5000));


//3. Write a function called 'countLetters' that takes a string parameter and returns an object that contains a count of each letter in the string.

// let countElements = (str)=>{
//   //create a object
//   const count = {};

//   for(let i =0;i<str.length;i++){
//     const char = str[i];

//     if(count[char]){
//       count[char]++;
//     }
//     else{
//       count[char]=1;
//     }
//   }
//   return count;

// };

// let ans =countElements("My name is Shivanshu Chauhan");
// console.log(ans);



//4. Write a function called 'createCounter' that returns a function. The returned function should increment a counter variable each time it is called and return the current count.

function createCounter() {
  let count = 0; // initialize count to 0

  // define and return a function that increments count and returns its value
  return function () {
    count++; // increment count by 1
    return count; // return the new value of count
  };
}

// create a new counter function
const counter = createCounter();

// call the counter function multiple times and log the result
console.log(counter()); // prints 1
console.log(counter()); // prints 2
console.log(counter()); // prints 3