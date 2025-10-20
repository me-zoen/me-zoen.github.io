let score = 0;

const image = document.getElementById('clickImage');
const scoreDisplay = document.getElementById('score');

image.addEventListener('click', () => {
    score += 1;
    scoreDisplay.textContent = 'Score: ' + score;
});
