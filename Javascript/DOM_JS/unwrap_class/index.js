let increment = ()=>{
  let value = parseInt(count.innerText);
  value += 1;
  count.innerText= value;

};

let decrement = ()=>{
  let value = parseInt(count.innerText);
  value -= 1;
  count.innerText= value;

};


let count = document.querySelector('#counter');

let i = 0;

while(i!=1000){
  increment();
  i++;
}