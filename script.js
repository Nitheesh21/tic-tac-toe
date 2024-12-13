let turn = "X"; 

const switchTurn = () => {
    turn = turn === "X"?"O": "X";
}
const boxes = document.getElementsByClassName('js-text');


const checkWin = () => {
    let winPatterns = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    console.log(winPatterns);
    const gameArr = [...boxes].map(box => box.textContent);
    console.log(gameArr);
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (gameArr[a] && gameArr[a] === gameArr[b] && gameArr[a] === gameArr[c]) {
            document.querySelector('.result-page').style.display="flex";
            document.querySelector('.result-page').innerHTML = 
            `<h1>${gameArr[a]} wins!</h1>`
            resetGame();
            return true;
        }
    }
    
}


//Game logic

[...boxes].forEach((element) => {
    element.addEventListener(('click'), () => {
        if (element.textContent === "") {
            element.innerHTML = turn;
            switchTurn();
            document.querySelector('.info').innerHTML = `Turn for ${turn}`;
            checkWin();
        }                
    })
})


//Reset
function resetGame() {
    const boxes = document.getElementsByClassName('js-text');
    
    [...boxes].forEach((element) => {
        element.innerHTML = ""; // Clear the content inside the element
    });
}
document.querySelector('.reset').addEventListener('click', () => {
    resetGame();
});
