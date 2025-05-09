function startGame() {

    let scoreValue = 0;
    let timeValue = 1;
    let currentNumber = 0;
    let sumValue = 0;
    let penaltyNumber = 0;
    let gameSpeed = 1000; 
    let bubbleClicked = false;

    const bubble = document.querySelector('.bbl');
    const scoreDisplay = document.querySelector('#score');
    const timeDisplay = document.querySelector('#time');
    const scopeImage = document.querySelector('#scope');
    const gameArea = document.querySelector('#man');
    const sumDisplay = document.querySelector('#sum');
    const startbtn = document.querySelector('#Start');

    document.querySelector('#restart').onclick = function () {
        location.reload();
    };

    function showNewBubble() {
        currentNumber = Math.floor(Math.random() * 30) + 1;

        if (currentNumber <= 7) {
            bubble.textContent = `- ${currentNumber}`;
            penaltyNumber = currentNumber;
            bubble.style.backgroundColor = '#a00'; 
        } else {
            bubble.textContent = `${currentNumber}`;
            bubble.style.backgroundColor = 'rgba(50, 62, 170, 0.774)'; 
            penaltyNumber = 0;
        }

        const left = Math.floor(Math.random() * (gameArea.clientWidth - 50));
        const top = Math.floor(Math.random() * (gameArea.clientHeight - 50));
        bubble.style.left = left + 'px';
        bubble.style.top = top + 'px';
    }
    
    bubble.addEventListener('click', function () {
      bubbleClicked = true;
    });

    const gameLoop = setInterval(() => {
        if (bubbleClicked) {
            let points = currentNumber > 7 ? currentNumber : -currentNumber;
            sumValue += points;
            if (sumValue < 0) 
             sumValue = 0;
            sumDisplay.textContent = `Score: ${sumValue}`;
            scoreValue++;
            scoreDisplay.textContent = `Click: ${scoreValue}`;
        } else {
            sumValue = Math.max(0, sumValue - 1);
            console.log(sumValue);
            sumDisplay.textContent = `Score: ${sumValue}`;
        }
        bubbleClicked = false;
    }, gameSpeed);

    const bubbleTimer = setInterval(showNewBubble, gameSpeed);

    const timer = setInterval(function () {
        timeValue++;
        timeDisplay.textContent = `Time: ${timeValue} sec`;

        if (timeValue>=60) {
            alert(`Game Over! Your score is: ${sumValue}`);
            clearInterval(gameLoop);
            clearInterval(bubbleTimer);
            clearInterval(timer);
            bubble.style.display = 'none';
            scopeImage.style.display = 'none';
            startbtn.style.display = 'none';
        }
    }, 1000);

    gameArea.addEventListener('mousemove', function (e) {
      scopeImage.style.left = e.clientX + 'px';
      scopeImage.style.top = e.clientY + 'px';
    });
}

document.querySelector('#Start').onclick = function (e) {
if(e.type == "click"){
  startGame()
}};
