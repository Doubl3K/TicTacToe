
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
        });
        document.getElementById("playground2").addEventListener("click", playground2 = () =>{
            let playerturn = turn();
            document.getElementById("playground2").textContent = (playerturn);
            document.getElementById("playground2").removeEventListener("click", playground2);
        });
        document.getElementById("playground3").addEventListener("click", playground3 = () =>{
            let playerturn = turn();
            document.getElementById("playground3").textContent = (playerturn);
            document.getElementById("playground3").removeEventListener("click", playground3);
        });
        document.getElementById("playground4").addEventListener("click", playground4 = () =>{
            let playerturn = turn();
            document.getElementById("playground4").textContent = (playerturn);
            document.getElementById("playground4").removeEventListener("click", playground4);
        });
        document.getElementById("playground5").addEventListener("click", playground5 = () =>{
            let playerturn = turn();
            document.getElementById("playground5").textContent = (playerturn);
            document.getElementById("playground5").removeEventListener("click", playground5);
        });
        document.getElementById("playground6").addEventListener("click", playground6 = () =>{
            let playerturn = turn();
            document.getElementById("playground6").textContent = (playerturn);
            document.getElementById("playground6").removeEventListener("click", playground6);
        });
        document.getElementById("playground7").addEventListener("click", playground7 = () =>{
            let playerturn = turn();
            document.getElementById("playground7").textContent = (playerturn);
            document.getElementById("playground7").removeEventListener("click", playground7);
        });
        document.getElementById("playground8").addEventListener("click", playground8 = () =>{
            let playerturn = turn();
            document.getElementById("playground8").textContent = (playerturn);
            document.getElementById("playground8").removeEventListener("click", playground8);
        });
        document.getElementById("playground9").addEventListener("click", playground9 = () =>{
            let playerturn = turn();
            document.getElementById("playground9").textContent = (playerturn);
            document.getElementById("playground9").removeEventListener("click", playground9);
        }); 
    })();

}

document.getElementById("start-button").addEventListener("click", startGame);

