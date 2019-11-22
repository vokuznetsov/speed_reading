
let timeouts = [];

const displayText = (wordSize, speed, textArr, textField) => {
    clearTimeouts();
    printText(wordSize, speed, 0, textArr, textField);
}

const consolePrint = () => {
    console.log("TEST CONSOLE LOG!!!");
}

const printText = (wordSize, speed, i, textArr, textField) => {
    if (textArr.length < wordSize) {
        textField.innerHTML = textArr.join(' ');
    } else {
        let id = setTimeout(function () {
            printByWords(wordSize, speed, i, textArr, textField);
        }, speed);
        timeouts.push(id);
    }
}

const printByWords = (wordSize, speed, i, textArr, textField) => {
    if (i < textArr.length) {
        let outputWords = [];
        for (; outputWords.length < wordSize && i < textArr.length; i++) {
            outputWords.push(textArr[i]);
        }

        let firstPart = firstPartOfText(outputWords);
        let middlePart = middlePartOfText(outputWords);
        let lastPart = lastPartOfText(outputWords);

        let text = firstPart + ' ' + middlePart + ' ' + lastPart;
        textField.innerHTML = text;

        printText(wordSize, speed, i, textArr, textField);
    }
}

const firstPartOfText = (outputWords) => {
    let middleId = Math.round((outputWords.length - 1) / 2);
    if ((outputWords.length - 1) % 2 == 0) {
        return outputWords.slice(0, middleId).join(' ');
    } else {
        return outputWords.slice(0, middleId - 1).join(' ');
    }
}

const middlePartOfText = (outputWords) => {
    let middleId = Math.round((outputWords.length - 1) / 2);

    let text;
    if ((outputWords.length - 1) % 2 == 0) {
        text = outputWords[middleId];
    } else {
        text = outputWords.slice(middleId - 1, middleId + 1).join(' ');
    }
    return text.fontcolor('red');
}

const lastPartOfText = (outputWords) => {
    let middleId = Math.round((outputWords.length - 1) / 2);
    return outputWords.slice(middleId + 1, outputWords.length).join(' ');
}

const clearTimeouts = () => {
    for (let i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]);
    }
    timeouts = [];
}

export { displayText, consolePrint };
