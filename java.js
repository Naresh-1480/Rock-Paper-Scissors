let score = JSON.parse(localStorage.getItem("score")) || { wins: 0, tie: 0, loose: 0 };

function pickComputerMove(){
    const randomNum = Math.random();
    let computerMove = "";
    if(randomNum>=0 && randomNum<1/3){
    computerMove = "Rock";
    }
    else if(randomNum>=1/3 && randomNum<2/3){
        computerMove = "Paper";   
        }
    else{
        computerMove = "Scissors";
    }
    return computerMove;
}
document.querySelector(".button1").addEventListener('click', function() {
    let move = pickComputerMove();
    if(move === "Rock"){
        score.tie++;
    }
    else if(move === "Paper"){
        score.loose++;
    }
    else{
        score.wins++;
    }
    localStorage.setItem("score",JSON.stringify(score));
    sdisplay.innerHTML = `Wins : ${score.wins} . Loose : ${score.loose} . Draws : ${score.tie}`;
});

document.querySelector(".button2").addEventListener('click', function() {
    let move = pickComputerMove();
    if(move === "Paper"){
        score.tie++;
    }
    else if(move === "Scissors"){
        score.loose++;
    }
    else{
        score.wins++;
    }
    localStorage.setItem("score",JSON.stringify(score));
    sdisplay.innerHTML = `Wins : ${score.wins} . Loose : ${score.loose} . Draws : ${score.tie}`;
});

document.querySelector(".button3").addEventListener('click', function() {
    let move = pickComputerMove();
    if(move === "Scissors"){
        score.tie++;
    }
    else if(move === "Rock"){
        score.loose++;
    }
    else{
        score.wins++;
    }
    localStorage.setItem("score",JSON.stringify(score));
    sdisplay.innerHTML = `Wins : ${score.wins} . Loose : ${score.loose} . Draws : ${score.tie}`;
});
const sdisplay = document.querySelector(".score");
sdisplay.innerHTML = `Wins : ${score.wins} . Loose : ${score.loose} . Draws : ${score.tie}`;
document.querySelector(".button4").addEventListener('click', function() {
    score.wins = 0;
    score.tie = 0;
    score.loose = 0;
    localStorage.setItem("score",JSON.stringify(score));
    sdisplay.innerHTML = `Wins : ${score.wins} . Loose : ${score.loose} . Draws : ${score.tie}`;
});

