const timerBoxes = document.querySelectorAll(".timer span");
let totalSeconds = 24 * 60 + 59;

function updateTimer() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (timerBoxes.length === 3) {
    timerBoxes[0].textContent = String(hours).padStart(2, "0");
    timerBoxes[1].textContent = String(minutes).padStart(2, "0");
    timerBoxes[2].textContent = String(seconds).padStart(2, "0");
  }

  totalSeconds = totalSeconds > 0 ? totalSeconds - 1 : 24 * 60 + 59;
}

updateTimer();
setInterval(updateTimer, 1000);
