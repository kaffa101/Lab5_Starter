// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const faceImage = document.querySelector('#explore img');
  const textArea = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');

  
  function voiceList() {
    const voices = window.speechSynthesis.getVoices();
    voices.forEach((voice, index) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = index;
      voiceSelect.appendChild(option);
    });
  }
  voiceList();
  talkButton.addEventListener('click', (event) => {
    const talking = new SpeechSynthesisUtterance(textArea.value);
    const selectedVoice = speechSynthesis.getVoices().find(v => v.name === voiceSelect.value);
    SpeechSynthesisUtterance.voice = selectedVoice;

    talking.onstart = () => {
      faceImage.src = 'assets/images/smiling-open.png';
    };
    
    talking.onend = () => {
      faceImage.src = 'assets/images/smiling.png';
    };  
    window.speechSynthesis.speak(talking);
  });
}