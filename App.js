const signals = ["Buy XAUUSD", "Sell XAUUSD", "Exit Position"];
const generateBtn = document.getElementById("generateSignal");
const output = document.getElementById("signalOutput");

generateBtn.addEventListener("click", () => {
  const signal = signals[Math.floor(Math.random() * signals.length)];
  output.textContent = signal;

  // TTS
  const msg = new SpeechSynthesisUtterance(signal);
  window.speechSynthesis.speak(msg);
});
