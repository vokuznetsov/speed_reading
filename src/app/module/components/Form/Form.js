import React from 'react';
import InputText from '../InputText/InputText';
import InputParameters from '../InputParameters/InputParameters';
import Radio from '../../../components/Radio/Radio'
import Button from '../../../components/Button/Button'
import * as consts from '../constant';
import { SEND as send_button } from '../../../constant';
import SpeedReadingPreparation from './index';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnable: true,
            selectedOption: consts.INPUT_OPTIONS[0]
        };
        this.spPreparation = new SpeedReadingPreparation();

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
    }

    handleSubmitForm(event) {
        if (this.state.isEnable) {
            this.spPreparation.addText(event);
        } else {
            event.preventDefault();
        }
    }

    handleRadioButtonChange(event) {
        const option = event.target.value;
        this.setState(state => ({
            selectedOption: option
        }));
    }

    render() {
        return (
            <form id="accept-text-form" onSubmit={this.handleSubmitForm}>
                <Radio options={consts.INPUT_OPTIONS} selectedOption={this.state.selectedOption} onChange={this.handleRadioButtonChange} />
                <InputText selectedOption={this.state.selectedOption} />
                <InputParameters />
                <Button id="send-button" name={send_button} type="submit" />
            </form>
        )
    }
}

export default Form;