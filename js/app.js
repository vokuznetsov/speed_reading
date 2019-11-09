const acceptTextForm = document.getElementById('accept-text-form');
let timeouts = [];

main();

function main() {
    acceptTextForm.addEventListener('submit', addText);
}

function addText(event) {
    event.preventDefault();

    const text = getValueByElementId('text-input');
    const speed = getValueByElementId('speed-input');
    const numberDisplayWords = getValueByElementId('display-words');

    if (text === '' || speed === undefined) {
        return alert("Необходимо ввести название задачи");
    }

    const textField = document.querySelector('.textfield');
    const textArr = text.split(/[\s,]+/);

    clearTimeouts();
    printText(numberDisplayWords, speed, 0, textArr, textField);
    //textField.innerHTML = '';

    console.log(text);
}

function clearTimeouts() {
    for (let i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    timeouts = [];
}

function printText(numberDisplayWords, speed, i, textArr, textField) {
    if (textArr.length < numberDisplayWords) {
        textField.innerHTML = textArr.join(' ');
    } else {
        let id = setTimeout(function () {
            printByWords(numberDisplayWords, speed, i, textArr, textField);
        }, speed);
        timeouts.push(id);
    }
}

function printByWords(numberDisplayWords, speed, i, textArr, textField) {
    if (i < textArr.length) {
        let outputWords = [];
        for (; outputWords.length < numberDisplayWords && i < textArr.length; i++) {
            outputWords.push(textArr[i]);
        }

        let firstPart = firstPartOfText(outputWords);
        let middlePart = middlePartOfText(outputWords);
        let lastPart = lastPartOfText(outputWords);

        let text = firstPart + ' ' + middlePart + ' ' + lastPart;
        textField.innerHTML = text;

        printText(numberDisplayWords, speed, i, textArr, textField);
    }
}

function firstPartOfText(outputWords) {
    let middleId = Math.round((outputWords.length - 1) / 2);
    if ((outputWords.length - 1) % 2 == 0) {
        return outputWords.slice(0, middleId).join(' ');
    } else {
        return outputWords.slice(0, middleId - 1).join(' ');
    }
}

function middlePartOfText(outputWords) {
    let middleId = Math.round((outputWords.length - 1) / 2);

    let text;
    if ((outputWords.length - 1) % 2 == 0) {
        text = outputWords[middleId];
    } else {
        text = outputWords.slice(middleId - 1, middleId + 1).join(' ');
    }
    return text.fontcolor('red');
}

function lastPartOfText(outputWords) {
    let middleId = Math.round((outputWords.length - 1) / 2);
    return outputWords.slice(middleId + 1, outputWords.length).join(' ');
}

function getValueByElementId(id) {
    let elemnt = document.getElementById(id);
    return elemnt.value;
}
