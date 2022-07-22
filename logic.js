const gameBoard = (() =>{
    const gameArr = ["X","X","X","X","X","X","X","X","X"]

    const placeTile = (() =>{
        document.getElementById("playground1").addEventListener("click", clicked);
        document.getElementById("playground2").addEventListener("click", clicked);
        document.getElementById("playground3").addEventListener("click", clicked);
        document.getElementById("playground4").addEventListener("click", clicked);
        document.getElementById("playground5").addEventListener("click", clicked);
        document.getElementById("playground6").addEventListener("click", clicked);
        document.getElementById("playground7").addEventListener("click", clicked);
        document.getElementById("playground8").addEventListener("click", clicked);
        document.getElementById("playground9").addEventListener("click", clicked);
    })();
    function clicked (){
        
        document.getElementById("playground1").textContent = "X";
    }
})();


