/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _print_words_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print_words.js */ "./src/print_words.js");


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
    Object(_print_words_js__WEBPACK_IMPORTED_MODULE_0__["displayText"])(wordsInMinute, speed, textArr, textField);
    Object(_print_words_js__WEBPACK_IMPORTED_MODULE_0__["consolePrint"])();
    
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




/***/ }),

/***/ "./src/print_words.js":
/*!****************************!*\
  !*** ./src/print_words.js ***!
  \****************************/
/*! exports provided: displayText, consolePrint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayText", function() { return displayText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "consolePrint", function() { return consolePrint; });

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




/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wcmludF93b3Jkcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBd0U7O0FBRXhFOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLG1FQUFPO0FBQ1gsSUFBSSxvRUFBWTs7QUFFaEI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxxREFBcUQ7QUFDbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTs7QUFFcUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBkaXNwbGF5VGV4dCBhcyBkaXNwbGF5LCBjb25zb2xlUHJpbnQgfSBmcm9tICcuL3ByaW50X3dvcmRzLmpzJztcclxuXHJcbmNvbnN0IGFjY2VwdFRleHRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FjY2VwdC10ZXh0LWZvcm0nKTtcclxuXHJcblxyXG5tYWluKCk7XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gICAgYWNjZXB0VGV4dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgYWRkVGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFRleHQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJUZXN0IGNvbnNvbGUgdXNpbmcgd2VicGFjayFcIik7XHJcblxyXG4gICAgY29uc3QgdGV4dCA9IGdldFZhbHVlQnlFbGVtZW50SWQoJ3RleHQtaW5wdXQnKTtcclxuICAgIGNvbnN0IHdvcmRzSW5NaW51dGUgPSBnZXRWYWx1ZUJ5RWxlbWVudElkKCdzcGVlZC1pbnB1dCcpO1xyXG4gICAgY29uc3QgbnVtYmVyRGlzcGxheVdvcmRzID0gZ2V0VmFsdWVCeUVsZW1lbnRJZCgnZGlzcGxheS13b3JkcycpO1xyXG5cclxuICAgIGlmICghdGV4dCB8fCAhd29yZHNJbk1pbnV0ZSB8fCAhbnVtYmVyRGlzcGxheVdvcmRzKSB7XHJcbiAgICAgICAgcmV0dXJuIGFsZXJ0KFwi0J3QtdC+0LHRhdC+0LTQuNC80L4g0LLQstC10YHRgtC4INC90LDQt9Cy0LDQvdC40LUg0LfQsNC00LDRh9C4XCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRleHRGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0ZmllbGQnKTtcclxuICAgIGNvbnN0IHRleHRBcnIgPSB0ZXh0LnNwbGl0KC9bXFxzLF0rLyk7XHJcblxyXG4gICAgbGV0IHNwZWVkID0gY2FsY3VsYXRlU3BlZWRJbk1zKG51bWJlckRpc3BsYXlXb3Jkcywgd29yZHNJbk1pbnV0ZSk7XHJcbiAgICBkaXNwbGF5KHdvcmRzSW5NaW51dGUsIHNwZWVkLCB0ZXh0QXJyLCB0ZXh0RmllbGQpO1xyXG4gICAgY29uc29sZVByaW50KCk7XHJcbiAgICBcclxuICAgIC8vdGV4dEZpZWxkLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIC8vY29uc29sZS5sb2codGV4dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZhbHVlQnlFbGVtZW50SWQoaWQpIHtcclxuICAgIGxldCBlbGVtbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XHJcbiAgICByZXR1cm4gZWxlbW50LnZhbHVlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYWxjdWxhdGVTcGVlZEluTXMobnVtYmVyRGlzcGxheVdvcmRzLCB3b3Jkc0luTWludXRlKSB7XHJcbiAgICBsZXQgd29yZHNJblNlY29uZCA9IHdvcmRzSW5NaW51dGUgLyA2MDtcclxuICAgIGxldCBzcGVlZCA9IG51bWJlckRpc3BsYXlXb3JkcyAvIHdvcmRzSW5TZWNvbmQ7XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJUaW1lb3V0IHNwZWVkIGluIHNlY29uZHM6IFwiICsgc3BlZWQpO1xyXG4gICAgcmV0dXJuIHNwZWVkICogMTAwMDtcclxufVxyXG5cclxuXHJcbiIsIlxyXG5sZXQgdGltZW91dHMgPSBbXTtcclxuXHJcbmNvbnN0IGRpc3BsYXlUZXh0ID0gKHdvcmRTaXplLCBzcGVlZCwgdGV4dEFyciwgdGV4dEZpZWxkKSA9PiB7XHJcbiAgICBjbGVhclRpbWVvdXRzKCk7XHJcbiAgICBwcmludFRleHQod29yZFNpemUsIHNwZWVkLCAwLCB0ZXh0QXJyLCB0ZXh0RmllbGQpO1xyXG59XHJcblxyXG5jb25zdCBjb25zb2xlUHJpbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlRFU1QgQ09OU09MRSBMT0chISFcIik7XHJcbn1cclxuXHJcbmNvbnN0IHByaW50VGV4dCA9ICh3b3JkU2l6ZSwgc3BlZWQsIGksIHRleHRBcnIsIHRleHRGaWVsZCkgPT4ge1xyXG4gICAgaWYgKHRleHRBcnIubGVuZ3RoIDwgd29yZFNpemUpIHtcclxuICAgICAgICB0ZXh0RmllbGQuaW5uZXJIVE1MID0gdGV4dEFyci5qb2luKCcgJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBpZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwcmludEJ5V29yZHMod29yZFNpemUsIHNwZWVkLCBpLCB0ZXh0QXJyLCB0ZXh0RmllbGQpO1xyXG4gICAgICAgIH0sIHNwZWVkKTtcclxuICAgICAgICB0aW1lb3V0cy5wdXNoKGlkKTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcHJpbnRCeVdvcmRzID0gKHdvcmRTaXplLCBzcGVlZCwgaSwgdGV4dEFyciwgdGV4dEZpZWxkKSA9PiB7XHJcbiAgICBpZiAoaSA8IHRleHRBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IG91dHB1dFdvcmRzID0gW107XHJcbiAgICAgICAgZm9yICg7IG91dHB1dFdvcmRzLmxlbmd0aCA8IHdvcmRTaXplICYmIGkgPCB0ZXh0QXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG91dHB1dFdvcmRzLnB1c2godGV4dEFycltpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZmlyc3RQYXJ0ID0gZmlyc3RQYXJ0T2ZUZXh0KG91dHB1dFdvcmRzKTtcclxuICAgICAgICBsZXQgbWlkZGxlUGFydCA9IG1pZGRsZVBhcnRPZlRleHQob3V0cHV0V29yZHMpO1xyXG4gICAgICAgIGxldCBsYXN0UGFydCA9IGxhc3RQYXJ0T2ZUZXh0KG91dHB1dFdvcmRzKTtcclxuXHJcbiAgICAgICAgbGV0IHRleHQgPSBmaXJzdFBhcnQgKyAnICcgKyBtaWRkbGVQYXJ0ICsgJyAnICsgbGFzdFBhcnQ7XHJcbiAgICAgICAgdGV4dEZpZWxkLmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG4gICAgICAgIHByaW50VGV4dCh3b3JkU2l6ZSwgc3BlZWQsIGksIHRleHRBcnIsIHRleHRGaWVsZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IGZpcnN0UGFydE9mVGV4dCA9IChvdXRwdXRXb3JkcykgPT4ge1xyXG4gICAgbGV0IG1pZGRsZUlkID0gTWF0aC5yb3VuZCgob3V0cHV0V29yZHMubGVuZ3RoIC0gMSkgLyAyKTtcclxuICAgIGlmICgob3V0cHV0V29yZHMubGVuZ3RoIC0gMSkgJSAyID09IDApIHtcclxuICAgICAgICByZXR1cm4gb3V0cHV0V29yZHMuc2xpY2UoMCwgbWlkZGxlSWQpLmpvaW4oJyAnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG91dHB1dFdvcmRzLnNsaWNlKDAsIG1pZGRsZUlkIC0gMSkuam9pbignICcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBtaWRkbGVQYXJ0T2ZUZXh0ID0gKG91dHB1dFdvcmRzKSA9PiB7XHJcbiAgICBsZXQgbWlkZGxlSWQgPSBNYXRoLnJvdW5kKChvdXRwdXRXb3Jkcy5sZW5ndGggLSAxKSAvIDIpO1xyXG5cclxuICAgIGxldCB0ZXh0O1xyXG4gICAgaWYgKChvdXRwdXRXb3Jkcy5sZW5ndGggLSAxKSAlIDIgPT0gMCkge1xyXG4gICAgICAgIHRleHQgPSBvdXRwdXRXb3Jkc1ttaWRkbGVJZF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRleHQgPSBvdXRwdXRXb3Jkcy5zbGljZShtaWRkbGVJZCAtIDEsIG1pZGRsZUlkICsgMSkuam9pbignICcpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRleHQuZm9udGNvbG9yKCdyZWQnKTtcclxufVxyXG5cclxuY29uc3QgbGFzdFBhcnRPZlRleHQgPSAob3V0cHV0V29yZHMpID0+IHtcclxuICAgIGxldCBtaWRkbGVJZCA9IE1hdGgucm91bmQoKG91dHB1dFdvcmRzLmxlbmd0aCAtIDEpIC8gMik7XHJcbiAgICByZXR1cm4gb3V0cHV0V29yZHMuc2xpY2UobWlkZGxlSWQgKyAxLCBvdXRwdXRXb3Jkcy5sZW5ndGgpLmpvaW4oJyAnKTtcclxufVxyXG5cclxuY29uc3QgY2xlYXJUaW1lb3V0cyA9ICgpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZW91dHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dHNbaV0pO1xyXG4gICAgfVxyXG4gICAgdGltZW91dHMgPSBbXTtcclxufVxyXG5cclxuZXhwb3J0IHsgZGlzcGxheVRleHQsIGNvbnNvbGVQcmludCB9O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9