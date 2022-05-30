const audioCtx = new (window.AudioContext ||
  window.webkitAudioContext ||
  window.audioContext)();

export function beep() {
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 100 / 1000);
}
