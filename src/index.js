import { displayText as display, consolePrint } from './print_words.js';
import style from './style/custom.scss';
import '../open-book.png';
//import 'bootstrap';

const acceptTextForm = document.getElementById('accept-text-form');

main();

function main() {
    acceptTextForm.addEventListener('submit', addText);
}

function addText(event) {
    event.preventDefault();

    console.log("Test console using webpack!");

    const text = getValueByElementId('text-input');
    const wordsInMinute = getValueByElementId('speed-input');
    const numberDisplayWords = getValueByElementId('display-words');

    if (!text || !wordsInMinute || !numberDisplayWords) {
        return alert("Необходимо ввести название задачи");
    }

    const textField = document.querySelector('.textfield');
    const textArr = text.split(/[\s,]+/);

    let speed = calculateSpeedInMs(numberDisplayWords, wordsInMinute);
    display(numberDisplayWords, speed, textArr, textField);
    consolePrint();
    
    //textField.innerHTML = '';

    //console.log(text);
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


