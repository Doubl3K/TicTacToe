const gameBoard = (() =>{
    const gameArr = ["X","X","X","X","X","X","X","X","X"]

    const placeTile = (() =>{
        document.getElementById("playground1").addEventListener("click", clicked1);
        document.getElementById("playground2").addEventListener("click", clicked2);
        document.getElementById("playground3").addEventListener("click", clicked3);
        document.getElementById("playground4").addEventListener("click", clicked4);
        document.getElementById("playground5").addEventListener("click", clicked5);
        document.getElementById("playground6").addEventListener("click", clicked6);
        document.getElementById("playground7").addEventListener("click", clicked7);
        document.getElementById("playground8").addEventListener("click", clicked8);
        document.getElementById("playground9").addEventListener("click", clicked9);
    })();
    function clicked1 (){
        document.getElementById("playground1").textContent = "X";
    }
    function clicked2 (){
        document.getElementById("playground2").textContent = "X";
    }
})();


// find a way to attach eventlistener to field without if 