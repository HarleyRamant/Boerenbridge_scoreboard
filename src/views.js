const startScreen = document.querySelector('#startScreen');
const gameScreen = document.querySelector('#game');
const settingsScreen = document.querySelector('#settings');


const views = document.querySelectorAll('.view');

const newGameBtn = document.querySelector('#newGameBtn');
const startGameBtn = document.querySelector('#startGameBtn');




newGameBtn.addEventListener('click', () => {
    showSettingsScreen();
})
startGameBtn.addEventListener('click', () => {
    showGameScreen();
})    





function hideScreens(){
    views.forEach(view => {
        view.classList.add('hidden');
    });
}
function showStartScreen(){
    hideScreens();
    startScreen.classList.remove('hidden');
}
function showGameScreen(){
    hideScreens();
    gameScreen.classList.remove('hidden');
    getPlayerNames();
}
function showSettingsScreen(){
    hideScreens();
    settingsScreen.classList.remove('hidden');
}