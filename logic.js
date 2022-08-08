
function createPlayers(name) {
    return {
        name : name,
        saySomething: function(){
            console.log("Hi my name is " + this.name);
        },

    }
}

const player1 = createPlayers("Tim");
const player2 = createPlayers("Jeff");


const startGame = () =>{
    console.log("the game has been started");
    const gameArr = ["field1", "field2", "field3", "field4", "field5", "field6", "field7", "field8", "field9"];
    
    const turnLogic = (() =>{
        let playerTurnCupp = 0;
        function turn(){
            let playerturn = "I";
            if (playerTurnCupp%2 == 0) {
                playerturn = "O"
                playerTurnCupp++;
            }
            else{
                playerturn = "X"
                playerTurnCupp++;
            }
            return(playerturn);
        }

        document.getElementById("playground1").addEventListener("click", playground1 = () =>{
            let playerturn = turn();
            document.getElementById("playground1").textContent = (playerturn);
            document.getElementById("playground1").removeEventListener("click", playground1);
            gameArr[0] = playerturn;
            winnerLogic();
        });
        document.getElementById("playground2").addEventListener("click", playground2 = () =>{
            let playerturn = turn();
            document.getElementById("playground2").textContent = (playerturn);
            document.getElementById("playground2").removeEventListener("click", playground2);
            gameArr[1] = playerturn;
            winnerLogic();
        });
        document.getElementById("playground3").addEventListener("click", playground3 = () =>{
            let playerturn = turn();
            document.getElementById("playground3").textContent = (playerturn);
            document.getElementById("playground3").removeEventListener("click", playground3);
            gameArr[2] = playerturn;
            winnerLogic();
        });
        document.getElementById("playground4").addEventListener("click", playground4 = () =>{
            let playerturn = turn();
            document.getElementById("playground4").textContent = (playerturn);
            document.getElementById("playground4").removeEventListener("click", playground4);
            gameArr[3] = playerturn;
            winnerLogic();
        });
        document.getElementById("playground5").addEventListener("click", playground5 = () =>{
            let playerturn = turn();
            document.getElementById("playground5").textContent = (playerturn);
            document.getElementById("playground5").removeEventListener("click", playground5);
            gameArr[4] = playerturn;
            winnerLogic();
        });
        document.getElementById("playground6").addEventListener("click", playground6 = () =>{
            let playerturn = turn();
            document.getElementById("playground6").textContent = (playerturn);
            document.getElementById("playground6").removeEventListener("click", playground6);
            gameArr[5] = playerturn;
            winnerLogic();
        });
        document.getElementById("playground7").addEventListener("click", playground7 = () =>{
            let playerturn = turn();
            document.getElementById("playground7").textContent = (playerturn);
            document.getElementById("playground7").removeEventListener("click", playground7);
            gameArr[6] = playerturn;
            winnerLogic();
        });
        document.getElementById("playground8").addEventListener("click", playground8 = () =>{
            let playerturn = turn();
            document.getElementById("playground8").textContent = (playerturn);
            document.getElementById("playground8").removeEventListener("click", playground8);
            gameArr[7] = playerturn;
            winnerLogic();
        });
        document.getElementById("playground9").addEventListener("click", playground9 = () =>{
            let playerturn = turn();
            document.getElementById("playground9").textContent = (playerturn);
            document.getElementById("playground9").removeEventListener("click", playground9);
            gameArr[8] = playerturn;
            winnerLogic();
        }); 
    })();

    const winnerLogic = () =>{
        //Horziontal winner check
            if (gameArr[0]==gameArr[1] && gameArr[0]==gameArr[2]) {
                console.log("Winner in row 1");
            } else if (gameArr[3]==gameArr[4] && gameArr[3]==gameArr[5]){
                console.log("Winner in row 2");
            } else if (gameArr[6]==gameArr[7] && gameArr[6]==gameArr[8]){
                console.log("Winner in row 3");
            }
        //Vertical winner check
            if (gameArr[0]==gameArr[3] && gameArr[0]==gameArr[6]) {
                console.log("Winner in column 1");
            } else if (gameArr[1]==gameArr[4] && gameArr[3]==gameArr[7]){
                console.log("Winner in column 2");
            } else if (gameArr[2]==gameArr[5] && gameArr[2]==gameArr[8]){
                console.log("Winner in column 3");
            }
        //Cross winner check
            if (gameArr[0]==gameArr[4] && gameArr[0]==gameArr[8]) {
                console.log("Cross win from top left");
            } else if (gameArr[2]==gameArr[4] && gameArr[2]==gameArr[6]) {
                console.log("cross win from top right");
            }
            console.log(gameArr);
        }
    }
document.getElementById("start-button").addEventListener("click", startGame);

