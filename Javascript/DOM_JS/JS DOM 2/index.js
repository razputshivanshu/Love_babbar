// function eventL(){console.log("I am moving towards my goals \n Software Engineer at Google");}

// // document.addEventListener('click',eventL);

// // 
// const content = document.querySelector('#wrapper');

// content.addEventListener('click', function(event){
//   console.log("I can do everything\n", event);
// });

// let xyz= document.querySelectorAll('a');

// let first = xyz[0];

// first.addEventListener('click',function(event){event.preventDefault();
// console.log("mazza aaya");});

// let myDiv = document.createElement('div');


// function ev(event){
//   console.log('I have clicked on paragraph' + event.target.textContent);
// }

// myDiv.addEventListener('click', ev);

// for(let i =1;i<=100;i++){
//   let newElement= document.createElement('p');
//   newElement.textContent= 'This is para'+i;


  

//   myDiv.appendChild(newElement);

// }
// document.body.appendChild(myDiv);

// -----
let element = document.querySelector('#wrapper');

element.addEventListener('click',function(event){console.log('span pr click kiya hai' + event.target.textContent);
})

