

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



async function abcd(){
  return 7;

}

//async function always returns a promise
abcd();