import React from 'react';
import * as consts from './constant';
import Textarea from '../Textarea/Textarea';
import Input from '../Input/Input';
import Button from '../Button/Button'


class Form extends React.Component {
    constructor(props) {
        super(props);

        this.words_by_minute_props = {
            id: 'speed-input',
            type: 'number',
            text: consts.WORDS_BY_MINUTE,
            min: '1',
            defaultValue: '250',
            contentEditable: true
        }

        this.number_words_props = {
            id: 'display-words',
            type: 'number',
            text: consts.NUMBER_WORDS,
            min: '1',
            defaultValue: '3',
            contentEditable: true
        };
    }

    render() {

        return (
            <form id="accept-text-form">
                <div className="border border-2 border-dark rounded">
                    <p className="my-3">{consts.TEXT_FOR_SPEED_READING}</p>
                    <Textarea id="text-input" />
                </div>
                <Input data={this.words_by_minute_props} />
                <Input data={this.number_words_props} />
                <Button />
            </form>
        )
    }
}

export default Form;