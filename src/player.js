//Player object
function Player (name){
    this.name = name;
    this.score = 10;
    this.bet = 0;
    this.result;

    this.getName = function(){
        const name = document.createElement('div');
        name.classList.add('playerTitle');
        name.innerHTML = `<span class='playerName'>${this.name}</span>: <span class='playerScore'>${this.score}</span><span class='playerBet'>${this.bet}</span>`;
        return name;
    }
    this.getPanel = function(){
        const panel = document.createElement('div');
        const minButton = document.createElement('button');
        const display = document.createElement('label');
        const plusButton = document.createElement('button');

        panel.classList.add('playerPanel');

        minButton.innerText = '<';
        plusButton.innerText = '>';
        display.innerText = '0';
        display.classList.add('label');
        display.id = this.name+'Score';
        //display.disabled = 'disabled';

        minButton.addEventListener('click', () => {
            display.innerText == 0 ? display.innerText = 0 : display.innerText--;
        })
        plusButton.addEventListener('click', () => {
            display.innerText++;
        })

        panel.appendChild(minButton);
        panel.appendChild(display);
        panel.appendChild(plusButton);

        return panel;
    }

    this.getPlayer = function(){
        const player = document.createElement('div');
        player.classList.add('player');
        
        player.appendChild(this.getName());
        player.appendChild(this.getPanel());
        
        return player;
    }

    this.setBet = function(bet){
        this.bet = bet;
    }
    this.calculatePoints = function(result){
        let points = 0;
        this.bet == result ? points+= 10 + (result*2) : points -= Math.abs(this.bet - result)*2;
        console.log(`${this.name} predicted ${this.bet} hits, and got ${result}, therefor he gets ${points} points`);
        this.score += points;
        this.bet = points;
    }
}




