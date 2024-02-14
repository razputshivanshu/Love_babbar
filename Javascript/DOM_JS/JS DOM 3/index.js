//adding 100 Para


// const t1 = performance.now();


// for(let i=1;i<=100;i++){
//   let newElement = document.createElement('p');
//   newElement.textContent = 'This is Para '+ i;

//   document.body.appendChild(newElement);
// }

// const t2 = performance.now();

// console.log("This took "+ (t2-t1) + " ms");

// Optimizing a bit
// const t3 = performance.now();
// let myDiv = document.createElement('div');

// for(let i =1;i<=100;i++){
//   let element = document.createElement('p');
//   element.textContent = 'This is Para' + i;

//   myDiv.appendChild(element);

// }

// document.body.appendChild(myDiv);

// const t4 = performance.now();

// console.log("2nd one took " + (t4-t3) + " ms");


//Reflow and Repaint

//Optimizing more using document Fragment

//Document Fragment -> Light weight document object. No reflow, repaint happens in it.



// const t5 = performance.now();

// let Fragment = document.createDocumentFragment();


// for(let i=1;i<=10000;i++){
//   let newElement = document.createElement('p');
//   newElement.textContent = 'This is Para '+ i;

//   Fragment.appendChild(newElement);
// }

// document.body.appendChild(Fragment); //1 reflow and 1 repaint

// const t6 = performance.now();

// console.log("This took "+ (t6-t5) + " ms");





// Call stack 
// Js is a single threaded language means processing of one command at a time.