const gameTable = document.querySelector('#gameTable');
const setBtn = document.querySelector('#setbtn');
const playBtn = document.querySelector('#playbtn');
const nextBtn = document.querySelector('#nextbtn');


let setBtnActive = true;
let playBtnActive = false;
let nextBtnActive = false;



playBtn.addEventListener('click', ()=>{
    if(playBtnActive){
        console.log('play btn');
        playRound();
    }
});
setBtn.addEventListener('click', ()=>{
    if(setBtnActive){
        console.log('set btn');
        setPrediction();
    }
    
});
nextBtn.addEventListener('click', ()=>{
    if(nextBtnActive){
        console.log('next btn');
        nextRound();
    }
});


//Get player names
let players = [];
players.push(new Player('Harley'));
players.push(new Player('Tim'));
players.push(new Player('Willy'));
players.push(new Player('Michel'));
players.push(new Player('Timmy'));
players.push(new Player('Kevin'));

loadPlayers();
//Load players onto view
function loadPlayers(){
    gameTable.innerHTML = "";
    players.forEach(player => {
        gameTable.appendChild(player.getPlayer());
    });
}



//Make players predict score, disable play button







//Set prediction, disable set button, enable play button
function setPrediction (){
    players.forEach(player =>{
        player.setBet(document.getElementById(player.name+'Score').innerText);
        console.log(player.bet);
    });
    setBtnActive = false;
    playBtnActive = true;
    setBtn.classList.toggle('active');
    setBtn.classList.toggle('disabled');
    playBtn.classList.toggle('active');
    playBtn.classList.toggle('disabled');
    loadPlayers();
}
function playRound(){

    players.forEach(player =>{
        player.calculatePoints(document.getElementById(player.name+'Score').innerText);
    });

    playBtnActive = false;
    nextBtnActive = true;
    playBtn.classList.toggle('active');
    playBtn.classList.toggle('disabled');
    nextBtn.classList.toggle('active');
    nextBtn.classList.toggle('disabled');
    loadPlayers();
}

function nextRound(){

    players.forEach(player =>{
        player.setBet(0);
    });

    nextBtnActive = false;
    setBtnActive = true;
    setBtn.classList.toggle('active');
    setBtn.classList.toggle('disabled');
    nextBtn.classList.toggle('active');
    nextBtn.classList.toggle('disabled');
    loadPlayers();
}


//When play is pressed, calculate scores, add to total and reset predictions.











