const acceptTextForm = document.getElementById('accept-text-form');

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

    printWords(numberDisplayWords, speed, 0, textArr, textField);
    //textField.innerHTML = '';

    console.log(text);
}

function printWords(numberDisplayWords, speed, i, textArr, textField) {
    if (textArr.length < numberDisplayWords) {
        textField.innerHTML = textArr.join(' ');
    } else {
        setTimeout(function () {
            if (i < textArr.length) {
                var outputWords = [];
                for (; outputWords.length < numberDisplayWords && i < textArr.length; i++) {
                    outputWords.push(textArr[i]);
                }

                var firstPart = firstPartOfText(outputWords);
                var middlePart = middlePartOfText(outputWords);
                var lastPart = lastPartOfText(outputWords);

                var text = firstPart + ' ' + middlePart + ' ' + lastPart;
                textField.innerHTML = text;

                printWords(numberDisplayWords, speed, i, textArr, textField);
            }
        }, speed)
    }
}

function firstPartOfText(outputWords) {
    var middleId = Math.round((outputWords.length - 1) / 2);
    if ((outputWords.length - 1) % 2 == 0) {
        return outputWords.slice(0, middleId).join(' ');
    } else {
        return outputWords.slice(0, middleId - 1).join(' ');
    }
}

function middlePartOfText(outputWords) {
    var middleId = Math.round((outputWords.length - 1) / 2);

    var text;
    if ((outputWords.length - 1) % 2 == 0) {
        text = outputWords[middleId];
    } else {
        text = outputWords.slice(middleId - 1, middleId + 1).join(' ');
    }
    return text.fontcolor('red');
}

function lastPartOfText(outputWords) {
    var middleId = Math.round((outputWords.length - 1) / 2);
    return outputWords.slice(middleId + 1, outputWords.length).join(' ');
}

function getValueByElementId(id) {
    var elemnt = document.getElementById(id);
    return elemnt.value;
}
