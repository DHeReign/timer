const startButtonSelector = ".button__start";
const stopButtonSelector = ".button_stop";
const hoursInputSelector = "#hours";
const minutesInputSelector = "#minutes";
const secondsInputSelector = "#secundes";

const startButton = document.querySelector(startButtonSelector);
const stopButton = document.querySelector(stopButtonSelector);
const hoursInput = document.querySelector(hoursInputSelector);
const minutesInput = document.querySelector(minutesInputSelector);
const secondsInput = document.querySelector(secondsInputSelector);

const delaySeconds = 1;
let intervalId;
let remainingTime;
let hours;
let minutes;
let seconds;

function startTimer(event) {
    event.preventDefault();
    hours = parseInt(hoursInput.value);
    minutes = parseInt(minutesInput.value);
    seconds = parseInt(secondsInput.value);

    remainingTime = hours * 3600 + minutes * 60 + seconds;
    intervalId = setInterval(updateTimer, delaySeconds * 1000);

    hide(startButton);
    unhide(stopButton);
    document.documentElement.requestFullscreen();
}

function updateTimer() {
    if(remainingTime )
    remainingTime -= 1;

    hours = Math.floor(remainingTime / 3600);
    minutes = Math.floor(remainingTime % 3600 / 60);
    seconds = remainingTime % 60;
}

function stopTimer() {
    clearInterval(intervalId);

    hide(stopButton);
    unhide(startButton);
    document.exitFullscreen();
}

function hide(element) {
    element.add("hide");
}
function unhide(element) {
    element.remove("hide");
}


startButton.addEventListener(".click", startTimer);
stopButton.addEventListener(".click", stopTimer);