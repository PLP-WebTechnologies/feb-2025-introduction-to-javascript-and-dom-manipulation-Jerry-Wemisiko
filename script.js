document.addEventListener('DOMContentLoaded', () => {
    const dynamicTextElement = document.getElementById('dynamicText');
    const styleButton = document.getElementById('styleButton');
    const elementContainer = document.getElementById('elementContainer');
    const addElementButton = document.getElementById('addElementButton');
    const removeElementButton = document.getElementById('removeElementButton');

    function changeText() {
        dynamicTextElement.textContent = 'The text has been dynamically changed by JavaScript!';
    }

    function changeStyle() {
        dynamicTextElement.style.color = 'blue';
        dynamicTextElement.style.fontSize = '1.5em';
        dynamicTextElement.style.fontWeight = 'bold';
    }

    function addElement() {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'A new paragraph added dynamically!';
        elementContainer.appendChild(newParagraph);
    }

    function removeElement() {
        const lastParagraph = elementContainer.lastElementChild;
        if (lastParagraph) {
            elementContainer.removeChild(lastParagraph);
        } else {
            alert('No more elements to remove!');
        }
    }

    setTimeout(changeText, 2000);
    styleButton.addEventListener('click', changeStyle);
    addElementButton.addEventListener('click', addElement);
    removeElementButton.addEventListener('click', removeElement);
});
