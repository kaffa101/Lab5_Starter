// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img');
  const audio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const honkButton = document.querySelector('button');

  hornSelect.addEventListener('change', (event) => {
    // TODO
    hornImage.src = `assets/images/${event.target.value}.svg`;
    });

    volumeSlider.addEventListener('input', (event) => {
      // TODO
      audio.volume = event.target.value / 100;
      if (event.target.value == 0) {
        volumeIcon.src = 'assets/icons/volume-level-0.svg';
      } 
      else if (event.target.value < 33) {
        volumeIcon.src = 'assets/icons/volume-level-1.svg';
      } 
      else if (event.target.value < 67) {
        volumeIcon.src = 'assets/icons/volume-level-2.svg';
      } 
      else {
        volumeIcon.src = 'assets/icons/volume-level-3.svg';
      }
    });
    honkButton.addEventListener('click', (event) => {
      audio.src = `assets/audio/${hornSelect.value}.mp3`;
      audio.play();
      if(hornSelect.value === 'party-horn') {
        const jsConfetti = new JSConfetti();
        jsConfetti.addConfetti();
      }
    });
}