import React from 'react';
import InputText from '../InputText/InputText';
import InputParameters from '../InputParameters/InputParameters';
import Button from '../../../components/Button/Button'
import { SEND as send_button } from '../../../constant';
import SpeedReadingPreparation from './index';



class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isEnable: true };
        this.spPreparation = new SpeedReadingPreparation();

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleTestButton = this.handleTestButton.bind(this);
    }

    handleSubmitForm(event) {
        if (this.state.isEnable) {
            this.spPreparation.addText(event);
        } else {
            this.submit(event.preventDefault());
        }
    }

    handleTestButton() {
        this.setState(state => ({
            isEnable: !state.isEnable
        }));
    }


    render() {
        return (
            <form id="accept-text-form" onSubmit={this.handleSubmitForm}>
                <InputText isEnable={this.state.isEnable} />
                <InputParameters />
                <Button id="send-button" name={send_button} type="submit" />
                <div>
                    <Button id="test-button" onClick={this.handleTestButton} name="Тест" type="button" />
                </div>
            </form>
        )
    }
}

export default Form;