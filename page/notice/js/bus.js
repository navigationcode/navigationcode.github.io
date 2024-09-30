

function playClickBus() {
const sounds = ["sound/bus.mp3", "sound/0.bus/adele.mp3", "sound/0.bus/bo.mp3", "sound/0.bus/coca.mp3", "sound/0.bus/dminh.mp3", "sound/0.bus/peter.mp3"];
const audio = document.getElementById("sound0");
let delay = 200;
sounds.forEach(sound => {
setTimeout(() => {
audio.src = sound;
audio.play();
}, delay);
delay += 2000;
});
}
