document.addEventListener('DOMContentLoaded', () => {
    const nameDisplay = document.getElementById('name-display');
    const colorBtn = document.getElementById('color-btn');

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    colorBtn.addEventListener('click', () => {
        const newColor = getRandomColor();
        nameDisplay.style.color = newColor;
    });
});
