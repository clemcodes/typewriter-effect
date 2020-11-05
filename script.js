const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ["developer", "designer", "translator", "trilingual", "vegan"];

//  delay before typing next character
const typingDelay = 200;
// typing will be slower than erasing
const erasingDelay = 100;
// delay between current and next string
const newTextDelay = 2000;

let textArrayIndex = 0;
let charIndex =0;

function type() {
  if(charIndex < textArray[textArrayIndex].length) {
    // add typing class to remove blink animation when typing
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.innerText += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    // erase 
    setTimeout(erase, newTextDelay);
  }
}

function erase(){
  if(charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.innerText = textArray[textArrayIndex].substring(0,charIndex -1)
    charIndex--;
    setTimeout(erase, erasingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, newTextDelay);
});