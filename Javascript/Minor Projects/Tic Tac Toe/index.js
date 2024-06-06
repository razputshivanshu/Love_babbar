

const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer;
let gameGrid;

const winningPositions = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [1,4,7],
  [0,3,6],
  [2,5,8],
  [0,4,8],
  [2,4,6]

]

// let create a function to initialize the game

function initGame(){
  currentPlayer = "X";
  gameGrid = ["","","","","","","","",""];

  //UI prr b empty krna pdega
  boxes.forEach((box,index)=>{
    box.innerText = "";
  })
  newGameBtn.classList.remove("active");

  gameInfo.innerText = `Current Player - ${currentPlayer}`;



}

initGame();

//Main function

function checkGameOver(){
  //To DO
  let answer = "";

  winningPositions.forEach((positions)=>{

    //all 3 boxes are non empty and are in same in value
    if((gameGrid[positions[0]] !== "" || gameGrid[positions[1]] !== "" || gameGrid[positions[2]] !== "" ) && (gameGrid[positions[0]] == gameGrid[positions[1]])&& gameGrid[positions[0]] == gameGrid[positions[2]]){

      //check is winner is X
      if(gameGrid[positions[0]] ==="X"){
        answer = "X";
      }
      else{
        answer = "O";
      }
      //disable pointer event
      boxes.forEach((box)=>{
        box.style.pointerEvents = "none";
      })

      //now we know who won so print the color
      boxes[positions[0]].classList.add("win");
      boxes[positions[1]].classList.add("win");
      boxes[positions[2]].classList.add("win");

    }
  });
  // it means we have a winner;
  if(answer !== ""){
    gameInfo.innerText = `Winner Player - ${answer}`;
    newGameBtn.classList.add("active");
    return;
  }

  //else it is a tie
  //check the whole board if it is fill
  let fillCount = 0;
  gameGrid.forEach((box)=>{
    if(box !== "")
    fillCount++;
  });

  if(fillCount === 9){
    gameInfo.innerText = "Game Tied";
    newGameBtn.classList.add("active");
  }




}












function swapTurn(){
  if(currentPlayer==="X"){
    currentPlayer ="O";
  }
  else{
    currentPlayer = "X";
  }
  //UI update krdo
  gameInfo.innerText = `Current Player - ${currentPlayer}`;
}



function handleClick(index){
  if(gameGrid[index] === ""){
    boxes[index].innerText = currentPlayer;
    gameGrid[index] = currentPlayer;

    //swap kro turn ko
    swapTurn();
    //check kro ki koi jeet to nii gya
    checkGameOver();
  }
}


//Hrr box prr event listener laga dia
boxes.forEach((box,index) =>{
  box.addEventListener("click",()=>{
    handleClick(index);
  })

});



newGameBtn.addEventListener("click", initGame);





