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


let numbers = [1,4,5,7];

console.log(numbers[0]);

//push at the right
numbers.push(9);

//push at the left
numbers.unshift(10);

numbers.splice(2,0,'a','b','c');

console.log(numbers);

console.log(numbers.indexOf('a'));

console.log(numbers.indexOf('z'));

//if we want to check if a number exist in an array

if(numbers.indexOf[4] != -1){
  console.log("present");
}

//but this is not a good way better way is to use includes.

console.log(numbers.includes(7));
