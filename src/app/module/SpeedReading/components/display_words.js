class DisplayWords {
    constructor() {
        this.timeouts = [];
    }

    displayText(wordSize, speed, textArr, textField) {
        this.clearTimeouts();
        this.printText(wordSize, speed, 0, textArr, textField);
    }

    consolePrint() {
        console.log("TEST CONSOLE LOG!!!");
    }

    printText(wordSize, speed, i, textArr, textField) {
        if (textArr.length < wordSize) {
            textField.innerHTML = textArr.join(' ');
        } else {
            const print = () => this.printByWords(wordSize, speed, i, textArr, textField);
            let id = setTimeout(print, speed);

            this.timeouts.push(id);
        }
    }

    printByWords(wordSize, speed, i, textArr, textField) {
        if (i < textArr.length) {
            let outputWords = [];
            for (; outputWords.length < wordSize && i < textArr.length; i++) {
                outputWords.push(textArr[i]);
            }

            let firstPart = this.firstPartOfText(outputWords);
            let middlePart = this.middlePartOfText(outputWords);
            let lastPart = this.lastPartOfText(outputWords);

            let text = firstPart + ' ' + middlePart + ' ' + lastPart;
            textField.innerHTML = text;

            this.printText(wordSize, speed, i, textArr, textField);
        }
    }

    firstPartOfText(outputWords) {
        let middleId = Math.round((outputWords.length - 1) / 2);
        if ((outputWords.length - 1) % 2 == 0) {
            return outputWords.slice(0, middleId).join(' ');
        } else {
            return outputWords.slice(0, middleId - 1).join(' ');
        }
    }

    middlePartOfText(outputWords) {
        let middleId = Math.round((outputWords.length - 1) / 2);

        let text;
        if ((outputWords.length - 1) % 2 == 0) {
            text = outputWords[middleId];
        } else {
            text = outputWords.slice(middleId - 1, middleId + 1).join(' ');
        }
        return text.fontcolor('red');
    }

    lastPartOfText(outputWords) {
        let middleId = Math.round((outputWords.length - 1) / 2);
        return outputWords.slice(middleId + 1, outputWords.length).join(' ');
    }


    clearTimeouts() {
        for (let i = 0; i < this.timeouts.length; i++) {
            clearTimeout(this.timeouts[i]);
        }
        this.timeouts = [];
    }
}

export default DisplayWords;