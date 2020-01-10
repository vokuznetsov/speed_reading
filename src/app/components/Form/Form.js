import React from 'react';
import * as consts from './constant';
import Textarea from '../Textarea/Textarea';
import Input from '../Input/Input';
import Button from '../Button/Button'
import { SEND as send_button } from '../../constant';



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isEnable: true };
        this.handleTestButton = this.handleTestButton.bind(this);
    }


    handleTestButton() {
        this.setState(state => ({
            isEnable: !state.isEnable
        }));
    }


    render() {
        return (
            <form id="accept-text-form">
                <InputField isEnable={this.state.isEnable} />
                <div>
                    <Button id="test-button" onClick={this.handleTestButton} name="Тест" />
                </div>
            </form>
        )
    }
}

function TextInput(props) {
    const words_by_minute_props = {
        id: 'speed-input',
        type: 'number',
        text: consts.WORDS_BY_MINUTE,
        min: '1',
        defaultValue: '250',
        contentEditable: true
    };

    const number_words_props = {
        id: 'display-words',
        type: 'number',
        text: consts.NUMBER_WORDS,
        min: '1',
        defaultValue: '3',
        contentEditable: true
    };

    return (
        <React.Fragment>
            <div className="border border-2 border-dark rounded">
                <p className="my-3">{consts.TEXT_FOR_SPEED_READING}</p>
                <Textarea id="text-input" />
            </div>
            <Input data={words_by_minute_props} />
            <Input data={number_words_props} />
            <Button id="send-button" name={send_button} />
        </React.Fragment>
    );
}

function UrlInput(props) {
    return (
        <div className="warning">
            Warning!
        </div>
    );
}

function InputField(props) {
    const enable = props.isEnable;
    if (enable) {
        return <TextInput />;
    }

    return <UrlInput />;
}

export default Form;