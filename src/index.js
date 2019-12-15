import { displayText as display, consolePrint } from './print_words.js';
import { DEFAULT_TEXT } from "./constant.js";
import style from './style/custom.scss';
import './static/open-book.png';
import './static/speeder.jpg';
import 'bootstrap';

const acceptTextForm = document.getElementById('accept-text-form');

main();

function main() {
    defaultValues();
    acceptTextForm.addEventListener('submit', addText);
}

function defaultValues() {
    const textArea = document.getElementById('text-input');
    textArea.innerHTML = DEFAULT_TEXT;
}

function addText(event) {
    event.preventDefault();

    const text = getValueByElementId('text-input');
    const wordsInMinute = getValueByElementId('speed-input');
    const numberDisplayWords = getValueByElementId('display-words');

    if (!text || !wordsInMinute || !numberDisplayWords) {
        return alert("Необходимо ввести название задачи");
    }

    const textField = document.querySelector('#textfield');
    const textArr = text.split(/[\s,]+/);

    let speed = calculateSpeedInMs(numberDisplayWords, wordsInMinute);
    display(numberDisplayWords, speed, textArr, textField);
    consolePrint();
}

function getValueByElementId(id) {
    let elemnt = document.getElementById(id);
    return elemnt.value;
}

function calculateSpeedInMs(numberDisplayWords, wordsInMinute) {
    let wordsInSecond = wordsInMinute / 60;
    let speed = numberDisplayWords / wordsInSecond;

    console.log("Timeout speed in seconds: " + speed);
    return speed * 1000;
}


