const text = "SATHVICK SRINATH";
const typingText = document.getElementById("typing-text");
let i = 0;
let loopCount = 0;
const maxLoopCount = 3; // Number of times to repeat the animation

function type() {
    if (i < text.length) {
        typingText.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 100);
    } else {
        if (loopCount < maxLoopCount) {
            // Reset the animation after typing the entire text
            setTimeout(reset, 1000);
            loopCount++;
        }
    }
}

function reset() {
    typingText.innerHTML = "";
    i = 0;
    setTimeout(type, 1000); // Delay before starting the typing animation again
}

type();