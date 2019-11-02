const acceptTextForm = document.getElementById('accept-text-form');

main();

function main() {
    acceptTextForm.addEventListener('submit', addText);
}

function addText(event) {
    event.preventDefault();

    const textInput = document.getElementById('text-input');
    const text = textInput.value;

    const speedInput = document.getElementById('speed-input');
    const speed = speedInput.value;

    if (text === '' || speed === undefined) {
        return alert("Необходимо ввести название задачи");
    }

    const textField = document.querySelector('.textfield');
    const textArr = text.split(/[\s,]+/);

    if (textArr.length > 3) {
        printWords(0, textArr, textField, speed);
    } else {
        textField.innerHTML = textInput;
    }



    console.log(text);
}

function printWords(i, textArr, textField, speed) {
    setTimeout(function () {
        if (i < textArr.length) {
            var outputWords = [];
            for (; outputWords.length < 3 && i < textArr.length; i++) {
                outputWords.push(textArr[i]);
            }

            var text = outputWords.join(' ');
            textField.innerHTML = text;
            //console.log(text);

            printWords(i, textArr, textField, speed);
        }
    }, speed)
}

