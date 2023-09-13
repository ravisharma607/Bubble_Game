let timer = 6;
let score = 0;
let hitValue = 0;
function incrScore() {
    score += 10;
    document.querySelector('#score').textContent = score;
}

function getNewHit() {
    hitValue = Math.floor(Math.random() * 10);
    document.querySelector('#hit').textContent = hitValue;
}

function createBubble() {
    let clutter = '';
    for (let i = 0; i < 160; i++) {
        let randomNumber = Math.floor((Math.random()) * 10)
        clutter += `<div class="ball">${randomNumber}</div>`;
    }

    document.querySelector('.bottom').innerHTML = clutter;
}

function runTime() {
    let timerInterval = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector('#timer').textContent = timer;
        }
        else {
            clearInterval(timerInterval);
            document.querySelector('.bottom').innerHTML = `
            <h2>Game Over</h2>
            `;
            document.querySelector('#hit').textContent = '🙂';
        }
    }, 1000);
}



document.querySelector('.bottom')
    .addEventListener('click', (value) => {
        let clickedNumber = Number(value.target.textContent);
        if (clickedNumber == hitValue) {
            incrScore();
            createBubble();
            getNewHit();
        }
    })


function startGame() {
    document.querySelector('.btn').addEventListener('click', () => {
        getNewHit()
        runTime()
        createBubble();
    })
}
startGame()
