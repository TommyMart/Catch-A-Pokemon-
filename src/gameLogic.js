let gameTimeRemaining = 0;
let defaultGameDuration = 120;
let gameCountdownInterval = null;

// if (gameTimeRemaining > 0){

// }

function startGame(desiredGameTime = defaultGameDuration){
    gameTimeRemaining = desiredGameTime;

    gameCountdownInterval = setInterval(() => {
        gameTimeRemaining -= 1;
        console.log("game time remaining is counting down is it now... " + gameTimeRemaining);

        if (gameTimeRemaining <= 0) {
            // If game has no time remaining, stop subtracting from it!
            clearInterval(gameCountdownInterval);
            console.log("Game has finished!");
        }
        // 1 second intervals
    }, 1000);
}

// startGame(); // gameTimeRemaining becomes 120
// startGame(60); // gameTimeRemaining becomes 60 

function stopGame(){
    gameTimeRemaining = 0;
    console.log("Stopped the game. Game time remaining is now: " + gameTimeRemaining);
}

let startGameButton = document.getElementById("startGameButton");
startGameButton.addEventListener("click", () => {
    startGame(3);
})

let stopGameButton = document.getElementById("stopGameButton");
stopGameButton.addEventListener("click", () => {
    stopGame();
})