const acceptTextForm = document.getElementById('accept-text-form');

main();

function main() {
    acceptTextForm.addEventListener('submit', addText);
}

function addText(event) {
    event.preventDefault();

    const textInput = document.getElementById('text-input');
    const text = textInput.value;

    if (text === '') {
        return alert("Необходимо ввести название задачи");
    }

    console.log(text);
}