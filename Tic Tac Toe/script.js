let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGamebtn = document.querySelector("#nbtn");
let msgcontainer = document.querySelector(".msg-container2");
let msg = document.querySelector("#msg2");
let msgContainer = document.querySelector(".msg-container");


let turnO = true; //palyerX, playerO

const winPatterns = [ // Define the winning patterns for Tic Tac Toe
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => { // Function to reset the game 
    turnO = true;  // Reset the turn to player O
    enableBoxes(); // Enable all boxes
    msgcontainer.classList.add("hide"); // Hide the message container
}
const newGame = () => {
    msgContainer.classList.add("hide"); // Hide the message container
}

boxes.forEach((box) => { // Loop through each box
  box.addEventListener("click", () => { // Add click event listener to each box
    console.log("box was clicked"); // Log when a box is clicked
    // box.innerText = "ABCD"; writen in boxes
    if (turnO) {  // If it's player O's turn
      // player O's turn
      box.innerText = "O"; // Set the text of the box to "O"
      box.style.color = "#ce3b7b"; // Change the text color to red
      turnO = false; // Switch to player X's turn
    } else {
      // player X's turn
      box.innerText = "X"; // Set the text of the box to "X"
      box.style.color = "#23ce6b"; // Change the text color to green
      turnO = true; // Switch to player O's turn
    }
    box.disabled = true; // Disable the box after it is clicked

    checkWinner(); // Check for a winner after each move
  });
});

    const disableBoxes = () => { // Function to disable all boxes
        for(let box of boxes) { // Loop through each box
            box.disabled = true; // Disable the box
        }
    };

     const enableBoxes = () => { // Function to disable all boxes
        for(let box of boxes) { // Loop through each box
            box.disabled = false; // Enable the box
            box.innerText = ""; // Clear the text of the box
        }
    };


    const showWinner = (winner) => { // Function to show the winner
       msg.innerText = `Congratulations! ${winner} is the winner!`; // Set the message text
       msg.style.color ="white";
       msgcontainer.classList.remove("hide"); // Show the message container
       newGamebtn.classList.remove("hide"); // Show the new game button
       disableBoxes();  // Disable all boxes after a win
    };

    function checkWinner() { // Function to check for a winner
    for (let pattern of winPatterns) { // Loop through each winning pattern
    //     console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let pos1Val = boxes[pattern[0]].innerText; // Get the value of the first position in the pattern
    let pos2Val = boxes[pattern[1]].innerText; // Get the value of the second position in the pattern
    let pos3Val = boxes[pattern[2]].innerText; // Get the value of the third position in the pattern

    if(pos1Val != "" && pos2Val != "" && pos3Val != "") { // Check if all positions are filled
        if(pos1Val === pos2Val && pos2Val === pos3Val) { // Check if all positions have the same value
          console.log("Winner", pos1Val); // Log the winner
          showWinner(pos1Val); // Show the winner
        }
    }

  }
};


newGamebtn.addEventListener("click", newGame); // Add click event listener to the new game button
reset.addEventListener("click", resetGame); // Add click event listener to the reset button