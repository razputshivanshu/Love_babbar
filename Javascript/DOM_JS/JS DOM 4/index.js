

// setTimeout(function(){
//   console.log('third');
// },3000);

// function sync(){
//   console.log('first');

// }
// sync();
// console.log('second');


// let meraPromise1 = new Promise(function(resolve,reject){
//   // console.log("I am inside promise");
//   // resolve(1998);

//   setTimeout(function(){
//     console.log("I am on the way to become the world best software developer1");
//     // resolve(2233);
//   }, 5000);
// });   // in a promise two parameters can be sent resolve or reject

// let meraPromise2 = new Promise(function(resolve,reject){
//   // console.log("I am inside promise");
//   // resolve(1998);

//   setTimeout(function(){
//     console.log("I am on the way to become the world best software developer2");
//     // resolve(2233);
//   }, 3000);
// }); 

// console.log('Pehla');

//let p = new Promise(function(resolve,reject){});


// let meraPromise = new Promise(function(resolve,reject){
//   console.log("I am going to become the best software engineer in the world");
//   resolve(6688);
//   // reject(6688);
// },5000);

// meraPromise.then((value)=>{console.log(value)});
// meraPromise.catch((error)=>{console.log("We got a error")});

// meraPromise.then((value)=>{console.log(value)},(error)=>{console.log("We got a error")});


//Promise pura hozaayne ke baad tumhe kuch krna hai to then ka use kro
// Promises ke andrr tum saare states ko handle krr paate ho



// ----- learn promises and arrow fucntion
// let vaada1 = new Promise(function(resolve,reject){
//   setTimeout(() => {
//     console.log("Set Timeout 1 started");
//   }, 2000);
//   resolve(2000);
// });

// let output = vaada1.then(()=>{
//   let vaada2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       console.log("Set Timeout 2 started");
//     },4000);
   
//   })
//   //
// })

// output.then(()=>{
//   let vaada3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Lo seekh gye hum arrow functions and promises");
      
//     },6000);
//   })
// });



// async function abcd(){
//   return 7;

// }

// //async function always returns a promise
// abcd();



// A simple program to learn 
// async function utility(){



// let himachal = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("Himachal mai to thand ho rhi hai");
//   },1000);
// });

// // himachal.then(()=>{
// //   setTimeout(()=>{
// //     console.log("Chandigarh mai to grmii horhi hai guyzzz!!!!");
// //   },1000);
// // });

// let Chandigarh = new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("Chandigarh is too hot!!!");
//   },5000);
// });


// let chdMausam = await Chandigarh;
// let himMausam = await himachal;

// return [chdMausam,himMausam];

// }


//Fetch API : I already know this and I can understand more deeply, it is widely used in express js.


// async function utility(){
// let content = await fetch('https://jsonplaceholder.typicode.com/todos/1');

// let output = await content.json();

// console.log(output);
// }


async function helper(){


let options = {
  method: 'POST',
  body: JSON.stringify({
  title: 'foo', body: 'bar', userId: 1,
  }),
  headers:{
  'Content-type': 'application/json; charset=UTF-8'}
};


  let content = await fetch ('https://jsonplaceholder.typicode.com/posts',options);

  let response = content.json();

  return response;

}

async function utility(){
  let ans = await helper();
  console.log(helper);
}

utility();


 

