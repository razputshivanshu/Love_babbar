// // Define a function that takes two parameters
// function sumNumbers(num1, num2) {
//   // Add the two parameters and store the result in a variable
//   const sum = num1 + num2;
//   // Return the sum
//   return sum;
// }

// // Call the function and output the result to the console
// console.log(sumNumbers(5, 10)); // Output: 15



// const sumNumbers = (num1,num2)=>{
//   const ans = num1+num2;
//   return ans;

// };

// console.log(sumNumbers(100,200));


// let length = (a)=>{
// let l = a.length;

// return l;
// };

// console.log(length("Shivanshu"));


// let cal = (num1 , num2) =>{

//   console.log("Sum of" + num1 +"and"+ num2+" is: "+ (num1+num2));

//   console.log("Multiplication of" + num1 +"and"+ num2+" is: "+ (num1*num2));

//   console.log("Divide of" + num1 +"and"+ num2+" is: "+ (num1/num2));

//   console.log("Difference of" + num1 +"and"+ num2+" is: "+ (num1-num2));

  

// };

// console.log(cal(10,30));


//Largest

// let largest = (num1,num2)=>{
//   if(num1>=num2) return num1;
//   else return num2;

// };

// console.log(largest(115,10));



//reverse 

// let reve = (str)=>{

//   let rev = str.split('').reverse().join('');

//   return rev;

// };

// console.log(reve("Shivanshu"));


//Multiplication table

// let table = (num)=>{

//   for(let i = 1;i<=10;i++){
//     console.log(`${num} * ${i} = ${num*i}`);
//     console.log('\n');
//   }
//   return;

// };


// console.log(table(111));



//Count the number of vowels in string

let vowelcount = (str)=>{

  const vowels =['a','e','i','o','u'];
  let count = 0;

  for(let i =0;i<str.length;i++){
    if(vowels.includes(str[i].toLowerCase())){
    console.log(str[i]);
    count++;}
  }
  return count;
};


console.log(vowelcount("Shivanshu"));
console.log(vowelcount("unnati"));