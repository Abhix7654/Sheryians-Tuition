const words = [
        "hello", "sheryians", "abhishek", "banana", "donald trump", "binod", "tamatar", "qwerty","baigan"
    ];
    
    let history = [];
    let currentword;
    let score = 0;
    let time = 30;
    let isplaying = true;
    let index = 0;
    
    const worddisplay = document.querySelector('#word-display');
    const wordinput = document.querySelector('#word-input');
    const scoredisplay = document.querySelector('#score');
    const timedisplay = document.querySelector('#timer');
    const historydisplay = document.querySelector('#history');
    let nameInput = document.querySelector('#name');
    let name;
    
    let countdownInterval;
    let statusCheckInterval;
    
    function init() {
        showword(words);
        wordinput.addEventListener('input', checkinput);
        countdownInterval = setInterval(countdown, 1000);
        statusCheckInterval = setInterval(checkstatus, 50);
    }
    
    function showword() {
        const randindex = Math.floor(Math.random() * words.length);
        currentword = words[randindex];
        worddisplay.innerHTML = currentword;
        wordinput.value = "";
    }
    
    function checkinput() {
        if (isplaying && wordinput.value === currentword) {
            score++;
            scoredisplay.innerHTML = `Score: ${score}`;
            showword();
        }
    }
    
    function countdown() {
        if (time > 0) {
            time--;
        } else if (time === 0) {
            if (isplaying) {
                history.push({ name: name, score: score });
                updateHistory();
                isplaying = false;
            }
        }
        timedisplay.innerText = `Time: ${time}s`;
    }
    
    function checkstatus() {
        if (time === 0 && !isplaying) {
            worddisplay.innerHTML = "Game Over";
        }
    }
    
    function updateHistory() {
        let historyContent = '';
        history.forEach((entry, i) => {
            historyContent += `${entry.name}:- ${entry.score}<br>`;
        });
        historydisplay.innerHTML = historyContent;
    }
    
    function resetGame() {
        clearInterval(countdownInterval);
        clearInterval(statusCheckInterval);
        score = 0;
        time = 30;
        isplaying = true;
        scoredisplay.innerHTML = `Score: ${score}`;
        timedisplay.innerText = `Time: ${time}s`;
        wordinput.value = "";
        worddisplay.innerHTML = "";
    }
    
    let button = document.querySelector('button');
    
    button.addEventListener('click', () => {
        name = nameInput.value.trim();
        if (name) {
            resetGame();
            init();
        } else {
            alert('Please enter your name');
        }
    });
    