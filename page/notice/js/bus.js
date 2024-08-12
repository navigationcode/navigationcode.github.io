

function playClickBus() {
const sounds = ["sound/bus.mp3", "sound/1.kl/ben.mp3", "sound/2.pd/ben.mp3"];
const audio = document.getElementById("sound0");
let delay = 200;
sounds.forEach(sound => {
setTimeout(() => {
audio.src = sound;
audio.play();
}, delay);
delay += 3000;
});
}
