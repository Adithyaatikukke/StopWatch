let timerInterval;
let running = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (running) {
        clearInterval(timerInterval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        timerInterval = setInterval(updateTimer, 1000);
        document.getElementById("startStop").textContent = "Stop";
    }
    running = !running;
}

function updateTimer() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    const timerDisplay = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById("timer").textContent = timerDisplay;
}

function reset() {
    clearInterval(timerInterval);
    running = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("timer").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
}
