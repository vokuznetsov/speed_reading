import * as consts from '../constant';

export const words_by_minute_props = {
    id: 'speed-input',
    type: 'number',
    text: consts.WORDS_BY_MINUTE,
    min: '1',
    defaultValue: '250',
    contentEditable: true
};

export const number_words_props = {
    id: 'display-words',
    type: 'number',
    text: consts.NUMBER_WORDS,
    min: '1',
    defaultValue: '3',
    contentEditable: true
};