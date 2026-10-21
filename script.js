const countdownElement = document.querySelector("#countdown");
const countdownLabel = document.querySelector("#countdown-label");
const wishMessage = document.querySelector("#wish-message");
const cakeArea = document.querySelector("#cake-area");
const confettiContainer = document.querySelector("#confetti");

let candleIsOut = false;

function startCountdown() {
  let seconds = 3;
  countdownElement.textContent = seconds;

  const timer = window.setInterval(() => {
    seconds -= 1;
    if (seconds > 0) {
      countdownElement.textContent = seconds;
      return;
    }

    window.clearInterval(timer);
    celebrate();
  }, 1000);
}

function celebrate() {
  if (candleIsOut) {
    return;
  }

  candleIsOut = true;
  cakeArea.classList.add("is-out");
  wishMessage.textContent = "Happy Birthday, Sudipa! May all your wishes come true! 💖";
  countdownLabel.textContent = "Your birthday wish is on its way!";
  countdownElement.textContent = "🎉";
  releaseConfetti();
}

function releaseConfetti() {
  const colors = ["#ee79a5", "#f8c66a", "#b79ae8", "#f5a0bd", "#a9d9bc"];
  for (let index = 0; index < 80; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = colors[index % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.8}s`;
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    confettiContainer.append(piece);
    piece.addEventListener("animationend", () => piece.remove(), { once: true });
  }
}

startCountdown();
