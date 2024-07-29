//1-e
let timer;

document.querySelector('.start').addEventListener('click', () => {
    const timerInput = document.querySelector('.InputTimer').value;
    const timerDisplay = document.querySelector('.timerDisplay');

    clearInterval(timer);

    let timerValue = parseInt(timerInput, 10);
    if (isNaN(timerValue) || timerValue < 0) {
        timerValue = 0;
    }
    timerDisplay.textContent = timerValue;

    timer = setInterval(() => {
        timerValue--;
        timerDisplay.textContent = timerValue;

        if (timerValue <= 0) {
            clearInterval(timer);
        }
    }, 1000);
});

//2-e

let Timeout;
let InputText = document.querySelector('.InputText');
let displayText = document.querySelector('.displayText');
displayText.textContent = '';

document.querySelector('.InputText').addEventListener('input', () => {
    if(Timeout){
        clearTimeout(Timeout);
    }

    Timeout = setTimeout(() =>{
        displayText.textContent = InputText.value;
    }, 300)
})