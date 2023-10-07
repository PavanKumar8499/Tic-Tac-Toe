// document.querySelector("button").on("click", function(){
//     document.querySelector("img").slideToggle();
// });

console.log("Welcome to TicTacToe")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;
// Change to Turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};
//Function to check win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ]
    wins.forEach(e => {
        if (
            (boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[1]].innerText === boxtext[e[2]].innerText) &&
            (boxtext[e[0]].innerText !== '')
        ) {
            e.forEach(index => {
                boxes[index].classList.add('highlight');
            });
            document.querySelector('.info').innerText = "Hurreeeyyy "+ boxtext[e[0]].innerText + " is Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width= "350px"
            music.play();
        }
    });
};



// function boxClick(event){
//     if(isgameover=true){
//         return false;// if the game is over do not allow further moves
//     }
// }

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn + " ";
            }
        }
    })
})




const reloadButton =document.getElementById("reset");
reloadButton.addEventListener('click',()=>{
resetGame();
});

function resetGame(){
    location.reload();
}