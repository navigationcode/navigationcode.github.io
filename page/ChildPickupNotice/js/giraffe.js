function playClickSound75() {
  const sounds = ["sound/giraffe.mp3", "sound/4.gr/tung.mp3"];
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

  function playClickSound76() {
  const sounds = ["sound/giraffe.mp3", "sound/4.gr/ngoc.mp3"];
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