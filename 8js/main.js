const game = document.getElementById('game');
const button = document.getElementById('reset-button');

let gameItemCount;
let CardArray = [];
let firstCard = null;
let secondCard = null;
let lockBoard = false; // Чтобы избежать двойного клика
let matchedPairs = 0; // Счетчик найденных пар

function gameStart(){
    gameItemCount = parseInt(prompt("Введите количество пар карточек"));
    CardArray = [];
    for (let i = 1; i <= gameItemCount; i++) {
        CardArray.push(i, i);
    }
    shuffle(CardArray);
    game.innerHTML = ''; // Очистить игровое поле
    for (let i = 0; i < CardArray.length; i++) {
        const card = createCard(CardArray[i]);
        game.appendChild(card);
    }
    matchedPairs = 0;
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// Функция создания карточки
function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;
    card.innerText = ''; // Начально скрываем значение карточки

    card.addEventListener('click', () => {
        if (lockBoard) return; // Блокировка доски
        if (card === firstCard) return; // Нельзя кликнуть на ту же карточку

        card.classList.add('open');
        card.innerText = value; // Показать значение карточки

        if (!firstCard) {
            firstCard = card;
            return;
        }

        secondCard = card;
        lockBoard = true;

        if (firstCard.dataset.value === secondCard.dataset.value) {
            firstCard.classList.add('success');
            secondCard.classList.add('success');
            matchedPairs++;
            resetBoard();
            checkEndGame();

        } else {
            setTimeout(() => {
                firstCard.classList.remove('open');
                secondCard.classList.remove('open');
                firstCard.innerText = '';
                secondCard.innerText = '';
                resetBoard();
            }, 1000);
        }

    });

    return card;
}

// Функция сброса состояния доски
function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

// Функция проверки завершения игры
function checkEndGame() {
    if (matchedPairs === gameItemCount) {
        button.style.display = 'block'; // Показать кнопку
    }
}

// Обработчик события для кнопки сброса игры
button.addEventListener('click', () => {
    button.style.display = 'none'; 
    gameStart()
    
});
gameStart()

