const textElement = document.getElementById('text');
const speedElement = document.getElementById('speed');
const texts = ['We are programmers.', 'We are the best.', 'We love programming.'];

let index = 1;
let wordIndex = 0;
let increase = true;

let speed = 300 / speedElement.value;
let step = speed;

speedElement.addEventListener('input', () => {
  speed = 300 / speedElement.value;
});

writeText();

function writeText() {
  textElement.innerText = texts[wordIndex].slice(0, index);
  setTimeout(() => {
    nextStep();
    writeText();
  }, step);
}

function nextStep() {
  if (increase) {
    index++;
    // 50%-150% random step speed
    step = Math.floor(speed * 0.5 + Math.random() * speed);

    if (index >= texts[wordIndex].length) {
      increase = false;
      step = 1000;
    }
  } else {
    index--;
    step = speed / 5;
    if (index <= 0) {
      increase = true;
      step = 1000;
      wordIndex++;
      if (wordIndex >= texts.length) {
        wordIndex = 0;
      }
    }
  }
}
