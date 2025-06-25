let secondspassed = 0;
let interval = null;
const time = document.getElementById("time");
const btn = document.getElementById("toggleBtn");

function pad(value) {
  return String(value).padStart(2, "0");
}

function setTime() {
  const minutes = Math.floor(secondspassed / 60);
  const seconds = secondspassed % 60;
  time.innerHTML = `${pad(minutes)}:${pad(seconds)}`;
}

function timer() {
  secondspassed++;
  setTime();
}

function start() {
  if (interval) stop();
  interval = setInterval(timer, 1000);
}

function stop() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  stop();
  secondspassed = 0;
  setTime();
}

btn.addEventListener("click", () => {
  const isNowStop = btn.classList.toggle("stop");
  btn.textContent = isNowStop ? "■" : "▶";
  isNowStop ? start() : stop();
});
