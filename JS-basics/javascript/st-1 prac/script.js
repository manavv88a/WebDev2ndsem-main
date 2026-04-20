
function changeText() {
    document.getElementById('demo').innerHTML = 'Text has been changed!';
}

function addElement() {
    const newPara = document.createElement('p');
    newPara.textContent = 'This is a newly added paragraph.';
    document.getElementById('container').appendChild(newPara);
}

function changeColor() {
    const colors = ['#c51b1b', '#895650', '#399595', '#a8a858'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function addText() {
    const input = document.getElementById('textInput');
    const text = input.value.trim();
        const newPara = document.createElement('p');
        newPara.textContent = text;
        document.getElementById('container').appendChild(newPara);
        input.value = ''; 
}