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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _print_words_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./print_words.js */ \"./src/print_words.js\");\n\r\n\r\nconst acceptTextForm = document.getElementById('accept-text-form');\r\n\r\n\r\nmain();\r\n\r\nfunction main() {\r\n    acceptTextForm.addEventListener('submit', addText);\r\n}\r\n\r\nfunction addText(event) {\r\n    event.preventDefault();\r\n\r\n    console.log(\"Test console using webpack!\");\r\n\r\n    const text = getValueByElementId('text-input');\r\n    const wordsInMinute = getValueByElementId('speed-input');\r\n    const numberDisplayWords = getValueByElementId('display-words');\r\n\r\n    if (!text || !wordsInMinute || !numberDisplayWords) {\r\n        return alert(\"Необходимо ввести название задачи\");\r\n    }\r\n\r\n    const textField = document.querySelector('.textfield');\r\n    const textArr = text.split(/[\\s,]+/);\r\n\r\n    let speed = calculateSpeedInMs(numberDisplayWords, wordsInMinute);\r\n    Object(_print_words_js__WEBPACK_IMPORTED_MODULE_0__[\"displayText\"])(wordsInMinute, speed, textArr, textField);\r\n    Object(_print_words_js__WEBPACK_IMPORTED_MODULE_0__[\"consolePrint\"])();\r\n    \r\n    //textField.innerHTML = '';\r\n\r\n    //console.log(text);\r\n}\r\n\r\nfunction getValueByElementId(id) {\r\n    let elemnt = document.getElementById(id);\r\n    return elemnt.value;\r\n}\r\n\r\nfunction calculateSpeedInMs(numberDisplayWords, wordsInMinute) {\r\n    let wordsInSecond = wordsInMinute / 60;\r\n    let speed = numberDisplayWords / wordsInSecond;\r\n\r\n    console.log(\"Timeout speed in seconds: \" + speed);\r\n    return speed * 1000;\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/print_words.js":
/*!****************************!*\
  !*** ./src/print_words.js ***!
  \****************************/
/*! exports provided: displayText, consolePrint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"displayText\", function() { return displayText; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"consolePrint\", function() { return consolePrint; });\n\r\nlet timeouts = [];\r\n\r\nconst displayText = (wordSize, speed, textArr, textField) => {\r\n    clearTimeouts();\r\n    printText(wordSize, speed, 0, textArr, textField);\r\n}\r\n\r\nconst consolePrint = () => {\r\n    console.log(\"TEST CONSOLE LOG!!!\");\r\n}\r\n\r\nconst printText = (wordSize, speed, i, textArr, textField) => {\r\n    if (textArr.length < wordSize) {\r\n        textField.innerHTML = textArr.join(' ');\r\n    } else {\r\n        let id = setTimeout(function () {\r\n            printByWords(wordSize, speed, i, textArr, textField);\r\n        }, speed);\r\n        timeouts.push(id);\r\n    }\r\n}\r\n\r\nconst printByWords = (wordSize, speed, i, textArr, textField) => {\r\n    if (i < textArr.length) {\r\n        let outputWords = [];\r\n        for (; outputWords.length < wordSize && i < textArr.length; i++) {\r\n            outputWords.push(textArr[i]);\r\n        }\r\n\r\n        let firstPart = firstPartOfText(outputWords);\r\n        let middlePart = middlePartOfText(outputWords);\r\n        let lastPart = lastPartOfText(outputWords);\r\n\r\n        let text = firstPart + ' ' + middlePart + ' ' + lastPart;\r\n        textField.innerHTML = text;\r\n\r\n        printText(wordSize, speed, i, textArr, textField);\r\n    }\r\n}\r\n\r\nconst firstPartOfText = (outputWords) => {\r\n    let middleId = Math.round((outputWords.length - 1) / 2);\r\n    if ((outputWords.length - 1) % 2 == 0) {\r\n        return outputWords.slice(0, middleId).join(' ');\r\n    } else {\r\n        return outputWords.slice(0, middleId - 1).join(' ');\r\n    }\r\n}\r\n\r\nconst middlePartOfText = (outputWords) => {\r\n    let middleId = Math.round((outputWords.length - 1) / 2);\r\n\r\n    let text;\r\n    if ((outputWords.length - 1) % 2 == 0) {\r\n        text = outputWords[middleId];\r\n    } else {\r\n        text = outputWords.slice(middleId - 1, middleId + 1).join(' ');\r\n    }\r\n    return text.fontcolor('red');\r\n}\r\n\r\nconst lastPartOfText = (outputWords) => {\r\n    let middleId = Math.round((outputWords.length - 1) / 2);\r\n    return outputWords.slice(middleId + 1, outputWords.length).join(' ');\r\n}\r\n\r\nconst clearTimeouts = () => {\r\n    for (let i = 0; i < timeouts.length; i++) {\r\n        clearTimeout(timeouts[i]);\r\n    }\r\n    timeouts = [];\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/print_words.js?");

/***/ })

/******/ });