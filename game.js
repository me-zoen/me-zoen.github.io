let score = 0;

const button = document.getElementById('clickButton');
const scoreDisplay = document.getElementById('score');

button.addEventListener('click', () => {
    score += 1;
    scoreDisplay.textContent = 'Score: ' + score;
});
