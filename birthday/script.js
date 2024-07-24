const canvas = document.getElementById('cakeCanvas');
const ctx = canvas.getContext('2d');

// Store information about each candle
const candles = [
    { x: 150 - 60, y: 150, color: '#ff0000', lit: true },
    { x: 190 - 60, y: 150, color: '#00ff00', lit: true },
    { x: 230 - 60, y: 150, color: '#0000ff', lit: true },
    { x: 270 - 60, y: 150, color: '#ffff00', lit: true },
    { x: 310 - 60, y: 150, color: '#ff00ff', lit: true }
];

// Function to draw a cake
function drawCake() {
    ctx.fillStyle = '#ffcc66'; // Cake color
    ctx.fillRect(70, 250, 200, 100); // Cake body
}

function drawBirthdayText(name) {
    ctx.font = '24px Pacifico'; // Cursive font and font size
    ctx.fillStyle = '#fff'; // Text color (white)
    ctx.textAlign = 'center'; // Center the text horizontally
    ctx.fillText(`Happy Birthday`, canvas.width / 2, 290); // Adjust the y-coordinate as needed
    ctx.fillText(`${name}!`, canvas.width / 2, 330);
}


// Function to draw a candle with flickering flame
function drawCandle(candle) {
    ctx.fillStyle = candle.color; // Set candle color
    ctx.fillRect(candle.x - 10, candle.y, 20, 100); // Draw candle (adjusted x-coordinate)

    if (candle.lit) {
        // Draw flame with random flicker
        ctx.beginPath();
        ctx.arc(candle.x, candle.y - 10, 5 + Math.random() * 5, 0, Math.PI * 2);
        ctx.fillStyle = 'yellow'; // Flame color
        ctx.fill();
        ctx.closePath();
    }
}

// Draw all candles
function drawCandles() {
    candles.forEach(candle => {
        drawCandle(candle);
    });
}

// Event listener for touch events on the window
window.addEventListener('touchstart', function (e) {
    const touchX = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    const touchY = e.touches[0].clientY - canvas.getBoundingClientRect().top;

    // Check if any flame is touched and turn it off
    candles.forEach(candle => {
        if (candle.lit && touchX >= candle.x - 10 && touchX <= candle.x + 10 && touchY >= candle.y - 10 && touchY <= candle.y + 10) {
            candle.lit = false;
        }
    });

    // Redraw the scene
    animateCandles();
    drawBirthdayText("Tasfia");
});

// Clear the canvas and redraw the scene
function animateCandles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawCake(); // Redraw the cake
    drawCandles(); // Redraw the candles
    drawBirthdayText("Tasfia");
}

// Initial drawing
animateCandles();

// Update candles every 400 milliseconds
setInterval(animateCandles, 400);
