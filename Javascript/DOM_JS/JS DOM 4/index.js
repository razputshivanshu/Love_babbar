

setTimeout(function(){
  console.log('third');
})

function sync(){
  console.log('first');


}
sync();
console.log('second');

