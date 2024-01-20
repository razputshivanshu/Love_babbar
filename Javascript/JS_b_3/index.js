// console.log("Hello Jee");

// let lastName = 'Babbar';

// let firstName = new String('Love');

// let message = `This 
// is my 
// message to ${lastName},
// I am a leaner. I am not
// here just to finish the courses.`;

// // console.log(message);

// // let words = message.split(' ');

// // console.log(words);

// let date = new Date();

// console.log(date);

// let date2 = new Date('Nov 29 2004 07:15');
// console.log(date2);


// let numbers = [1,4,5,7];

// console.log(numbers[0]);

// //push at the right
// numbers.push(9);

// //push at the left
// numbers.unshift(10);

// numbers.splice(2,0,'a','b','c');

// console.log(numbers);

// console.log(numbers.indexOf('a'));

// console.log(numbers.indexOf('z'));

// //if we want to check if a number exist in an array

// if(numbers.indexOf[4] != -1){
//   console.log("present");
// }

// //but this is not a good way better way is to use includes.

// console.log(numbers.includes(7));


// let courses = [
//   {no:1, naam:'Shiv'},
//   {no:2, naam:'Love'}
// ]

// console.log(courses);


// console.log(courses.indexOf( {no:1,naam:'Love'} ));

// console.log(courses.includes( {no:1,naam:'Love'} ));

//These functions doesn't work with objects because both these objects are different and have different references.


// let course= courses.find(function(course){
//   return course.naam == 'Love';
// });
// console.log(course);
// to make it more smaller we are going to use arrow function


// let course = courses.find(course => course.naam ==='Love');
// console.log(course);

// let number = courses.find(number => number.find == 1);
// console.log(number);



//Removing Element

//end - pop
//begin - shift
//middle - splice

// let numbers = [1,2,3,4,5,6,7];

// numbers.pop();
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

// numbers.splice(2,1); //(index,how many)
// console.log(numbers);




//// Emptying an Array

// let numbers =[1,2,3,5,6];
// let numbers2=numbers;



// //first mehtod
// // numbers = [];
// //Adress is copied not the values

// //ANother method and ideal method is this
// // numbers.length=0;


// //Another method
// numbers.splice(0,numbers.length);

// //Another method is popping until the numbers.length 

// console.log(numbers);
// console.log(numbers2);


//Combining and Slicing Arrays

// let first =[1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// //slice (start index, end index)
// // it will take end index - 1

// // let sliced=combined.slice(2,5);
// let sliced = combined.slice(2);
// console.log(sliced);

//Homework: Combining and Slicing over objects


// ... -> spread operator
// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a', ...second,'b','true'];

// console.log(combined);


// //copy 
// let another = [...combined];
// console.log(combined);


// let arr = [1,2,3,4,5,6,7,8,9,10];
// for(let value of arr){
//   console.log(value);
// }

// arr.forEach((number)=>console.log(number));
// //SUcessfully written a first arrow function by myself.




//// Joining Arrays
// let numbers = [10,20,30,40,50];
// const joined = numbers.join(',');
// console.log(joined);


////Split Method

// let message = 'This is my first message';
// let parts = message.split(' ');
// console.log(parts);


// let joined = parts.join('_');
// console.log(joined);



///Sorting Arrys

// let num = [1,23,2,4,53,2,435,2,13,4];
// num.sort();
// console.log(num);

// num.reverse();
// console.log(num);

// let points =[10,30,2,3,5,1,3];
// points.sort(function(a, b){return a - b});
// console.log(points);



//filtering arrays: by using this thing we can add items

// let arr= [1,2,-1,-3,4];

// let filtered = arr.filter((number)=> number >=0);
// // we don't need to use return with arrow functions.
// // let filtered = arr.filter(function(value){
// //   return value>0;
// // });
// console.log(filtered);



//Mapping arrays:

// let numbers =[7,8,10,11];
// // let items = numbers.map(function(value){
// //   return 'student_no ' + value;
// // });
// let items = numbers.map(values => 'student_no: '+ values);

// console.log(items);


// let numbers =[1,2,-6,-9];
// // let filtered = numbers.filter(value => value <=0);

// // let items = filtered.map(function(num){
// //   let obj = {value:num};
// //   return obj;
// // });

// // let items = filtered.map(num =>{
// //   let obj={value:num};
// //   return obj;
// // });


// //Chaining
// let items = numbers
//             .filter(value => value >=0)
//             .map(num=>{value:num});

// console.log(items);


/////JS Day - 4

//Functions

// function printCounting(){
//   console.log("I am going to do all my tasks.");

// }
// //function call
// printCounting();

// // we can write this line even above the function 
// // Hoisting is the process of moving functions to the top of the file. It is done by JS engine.



// //named function assignment
// let stand = function walk(){
//   console.log("Shivanshu");
// };


// //anonymous function assignment
// let stand2 = function(){
//   console.log("Shivanshu22");
// };


// stand();

// // hoisting only works with function declaration, it does work with function assignment.

// let jump = stand;

// jump();


//Dynamic language
// let x =1 ;
// x = 'a';

// console.log(x);

// function sum(a,b){
//   // console.log(arguments);
//   // return a+b;
//   let total = 0;
//   for(let value of arguments)
//   total = total+value;
//   return total;
//   //return a+b; // it will work fine for 2 parameters
// };

// // console.log(sum('a','b'));
// // console.log(sum(1,'b'));
// // console.log(sum(1));
// // console.log(sum(11,12,13,14,15));

// let ans = sum(1,2,3,4,5);
// console.log(ans);




// rest operator -> ...
// spread operator -> ... -> concat or copy used for array

//we can have multiple parameters in function

function sum(num,...args){
  console.log(args);
}
//by using rest operator we can print in the form of array
// and by using not rest operator we store in the form of obj and is in the key -> value pairs.

sum(1,2,3,4,5);











