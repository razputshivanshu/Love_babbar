

// setTimeout(function(){
//   console.log('third');
// },3000);

// function sync(){
//   console.log('first');

// }
// sync();
// console.log('second');


let meraPromise = new Promise(function(resolve,reject){
  // console.log("I am inside promise");
  // resolve(1998);

  setTimeout(function(){
    console.log("I am on the way to become the world best software developer");
    resolve(2233);
  }, 5000);
});   // in a promise two parameters can be sent resolve or reject

console.log('Pehla');

