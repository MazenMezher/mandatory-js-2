// A $( document ).ready() block.
$( document ).ready(function() {
   
    let player1 = "X";
    let player2 = "O";

    let currentMove = 1;
    let moves = 0;

    let box = $(".square");
    let victoryBox = $(".winner");
    let reset = $(".reset");

    let gameOver = false;

    box.on("click", function(e){
        if (gameOver === true){
            return
        }
        moves++;
        
        if (currentMove === 1 && e.target.innerHTML === "") {
            event.target.innerHTML = player1;
            event.target.style.color="red";
            currentMove++
        } else if (e.target.innerHTML === "") {
            event.target.innerHTML = player2;
            event.target.style.color="yellow";
            currentMove--;
        } else {
            alert("Square already in use! pick another please");
            
        }
        if(checkingForVictory()) {
            let theWinner = currentMove === 1 ? player2 : player1;
            declareWinner(theWinner);
            
        }; 
        
    });

    

    function checkingForVictory(){
        if(moves > 4){
            let actions = Array.prototype.slice.call($(".square"));
            let results = actions.map(function(square) {
                return square.innerHTML;
            });

            let winningOptions = [
                [0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]
                ]; 
            
                return winningOptions.find(function(combo){
                    if(results[combo[0]]!=="" && results[combo[1]]!=="" && results[combo[2]]!=="" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]){
                        return true;
                    } else {
                        return false;
                    }
                })
    }
    }

    reset.on("click",function(e){
        let actions = Array.prototype.slice.call($("square"));
        actions.map((m) => {
            m.innerHTML = "";
        });
        box.html("");
        victoryBox.css("display","none");
        currentMove = 1;
        moves = 0;
        gameOver = false;
    })

    function declareWinner(winner) {
        victoryBox.css("display", "block");
        reset.css("display","block");
        winner = winner === player1 ? "Congratulations" + "Player 1" : "Player 2"
        victoryBox.html(alert(winner + " " + "Wins!"));
        gameOver = true;
    }
});