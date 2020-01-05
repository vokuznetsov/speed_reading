import DisplayWords from './DisplayWords';
import { DEFAULT_TEXT } from "../constant.js";
import style from '../style/custom.scss';
import '../../resources/open-book.png';
import '../../resources/speeder.jpg';

class SpeedReadingPreparation {
    constructor() {
        this.displayWords = new DisplayWords();``
    }

    speedReading() {
        const acceptTextForm = document.getElementById('accept-text-form');

        this.defaultValues();
        acceptTextForm.addEventListener('submit', (event) => this.addText(event));
    }

    defaultValues() {
        const textArea = document.getElementById('text-input');
        textArea.innerHTML = DEFAULT_TEXT;
        textArea.classList.add("text-secondary");
    }

    addText(event) {
        event.preventDefault();

        const text = this.getValueByElementId('text-input');
        const wordsInMinute = this.getValueByElementId('speed-input');
        const numberDisplayWords = this.getValueByElementId('display-words');

        if (!text || !wordsInMinute || !numberDisplayWords) {
            return alert("Необходимо ввести название задачи");
        }

        const textField = document.querySelector('#textfield');
        const textArr = text.split(/[\s,]+/);

        let speed = this.calculateSpeedInMs(numberDisplayWords, wordsInMinute);
        this.displayWords.displayText(numberDisplayWords, speed, textArr, textField);
        this.displayWords.consolePrint();
    }

    getValueByElementId(id) {
        let elemnt = document.getElementById(id);
        return elemnt.value;
    }

    calculateSpeedInMs(numberDisplayWords, wordsInMinute) {
        let wordsInSecond = wordsInMinute / 60;
        let speed = numberDisplayWords / wordsInSecond;

        console.log("Timeout speed in seconds: " + speed);
        return speed * 1000;
    }
}

export default SpeedReadingPreparation;