const containerText = document.querySelector(".container-text");
const career = ['Job'];
const tech = ['Software', 'Web Dev', 'Data Analytics'];

let careerIndex = 0;
let techIndex = 0;
let characterIndex = 0;

updateText()

function updateText() {
    characterIndex++;
    containerText.innerHTML = `<h1>Hi, I'm Name I am a ${career[careerIndex]}. 
    I am an expert in ${tech[techIndex].slice(0, characterIndex)} 
    </h1>`;

    if (characterIndex === tech[techIndex].length) {
        techIndex++
        characterIndex = 0;
    }

    if (techIndex === tech.length) {
        techIndex = 0;
    }

    setTimeout(updateText, 300);
}