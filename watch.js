let isRunning = false;
let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function playPauseFunc() {
    if (isRunning) {
        pauseTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
    document.getElementById('play').innerHTML = '<i class="fa fa-pause-circle"></i>';
    document.querySelector('.defaultCircle').classList.add('runningCircle');
}

function pauseTimer() {
    isRunning = false;
    clearInterval(timerInterval);
    elapsedTime = Date.now() - startTime;
    document.getElementById('play').innerHTML = '<i class="fa fa-play-circle"></i>';
    document.querySelector('.defaultCircle').classList.remove('runningCircle');
    document.querySelector('.defaultCircle').classList.add('pausedCircle');
}

function resetFunc() {
    clearInterval(timerInterval);
    isRunning = false;
    startTime = 0;
    elapsedTime = 0;
    document.getElementById('play').innerHTML = '<i class="fa fa-play-circle"></i>';
    document.getElementById('hours').innerText = '00';
    document.getElementById('minutes').innerText = '00';
    document.getElementById('seconds').innerText = '00';
    document.getElementById('milliseconds').innerText = '00';
    document.querySelector('.defaultCircle').classList.remove('runningCircle', 'pausedCircle');
}

function updateTime() {
    elapsedTime = Date.now() - startTime;

    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

    document.getElementById('hours').innerText = pad(hours);
    document.getElementById('minutes').innerText = pad(minutes);
    document.getElementById('seconds').innerText = pad(seconds);
    document.getElementById('milliseconds').innerText = pad(milliseconds);
}

function pad(unit) {
    return unit.toString().padStart(2, '0');
}
