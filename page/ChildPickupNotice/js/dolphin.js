  function playClickSound50() {
  const sounds = ["sound/dolphin.mp3", "sound/3.dp/quang.mp3"];
  const audio = document.getElementById("sound0");

  let delay = 200; // Delay 1 giây giữa các âm thanh
  sounds.forEach(sound => {
    setTimeout(() => {
    audio.src = sound;
    audio.play();
    }, delay);
    delay += 2500;
  });
  }

  function playClickSound51() {
  const sounds = ["sound/dolphin.mp3", "sound//3.dp/min.mp3"];
  const audio = document.getElementById("sound0");

  let delay = 200; // Delay 1 giây giữa các âm thanh
  sounds.forEach(sound => {
    setTimeout(() => {
    audio.src = sound;
    audio.play();
    }, delay);
    delay += 2500;
  });
  }