document.addEventListener('DOMContentLoaded', () => {
    // Get references to the elements we'll be manipulating
    const dynamicTextElement = document.getElementById('dynamicText');
    const styleButton = document.getElementById('styleButton');
    const elementContainer = document.getElementById('elementContainer');
    const addElementButton = document.getElementById('addElementButton');
    const removeElementButton = document.getElementById('removeElementButton');

    // Function to change the text content
    function changeText() {
        dynamicTextElement.textContent = 'The text has been dynamically changed by JavaScript!';
    }

    // Function to modify CSS styles
    function changeStyle() {
        dynamicTextElement.style.color = 'blue';
        dynamicTextElement.style.fontSize = '1.5em';
        dynamicTextElement.style.fontWeight = 'bold';
    }

    // Function to add a new element
    function addElement() {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'A new paragraph added dynamically!';
        newParagraph.classList.add('dynamicElement'); // You can add classes too
        elementContainer.appendChild(newParagraph);
    }

    // Function to remove the last added element
    function removeElement() {
        const lastParagraph = elementContainer.lastElementChild;
        if (lastParagraph && lastParagraph.classList.contains('dynamicElement')) {
            elementContainer.removeChild(lastParagraph);
        } else if (elementContainer.children.length > 1) {
            // If there are initial elements and no dynamic ones left, remove the last initial one
            elementContainer.removeChild(elementContainer.lastElementChild);
        } else {
            alert('No more elements to remove!');
        }
    }

    // Event listeners to trigger the functions
    setTimeout(changeText, 2000); // Change text after 2 seconds
    styleButton.addEventListener('click', changeStyle);
    addElementButton.addEventListener('click', addElement);
    removeElementButton.addEventListener('click', removeElement);
});
