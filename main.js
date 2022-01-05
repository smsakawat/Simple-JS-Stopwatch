// global variables
const timeEl = document.querySelector(".watch .time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

let seconds = 0;
let interval = null;
// event listeners
startBtn.addEventListener("click", startHandler);
pauseBtn.addEventListener("click", pauseHanlder);
resetBtn.addEventListener("click", resetHandler);
// time func
function timer() {
  seconds++;

  //  update time
  let hours = Math.floor(seconds / 3600);
  let mintues = Math.floor((seconds - hours * 3600) / 60);
  let secs = (seconds - hours * 3600) % 60;

  if (hours < 10) hours = "0" + hours;
  if (mintues < 10) mintues = "0" + mintues;
  if (secs < 10) secs = "0" + secs;
  timeEl.innerText = `${hours}:${mintues}:${secs}`;
}

function startHandler() {
  if (interval) return;
  interval = setInterval(timer, 1000);
}

function pauseHanlder() {
  clearInterval(interval);
  interval = null;
}
function resetHandler() {
  pauseHanlder();
  seconds = 0;
  timeEl.innerText = "00:00:00";
}

// The End
