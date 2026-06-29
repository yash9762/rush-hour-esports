window.addEventListener("load", () => {
  setTimeout(() => document.getElementById("loader").classList.add("hide"), 700);
});

let totalSeconds = 24 * 60 + 55;
const h = document.getElementById("h");
const m = document.getElementById("m");
const s = document.getElementById("s");

function tick(){
  const hr = Math.floor(totalSeconds / 3600);
  const mn = Math.floor((totalSeconds % 3600) / 60);
  const sc = totalSeconds % 60;
  h.textContent = String(hr).padStart(2,"0");
  m.textContent = String(mn).padStart(2,"0");
  s.textContent = String(sc).padStart(2,"0");
  totalSeconds = totalSeconds > 0 ? totalSeconds - 1 : 24 * 60 + 55;
}
tick();
setInterval(tick, 1000);
