import React from 'react'
import Form from "../../../components/Form/Form";
import Output from "../../../components/Output/Output";
import SpeedReadingPreparation from './index';


class SpeedReadingContainer extends React.Component {
    constructor(props) {
        super(props);

        this.spPreparation = new SpeedReadingPreparation();
        //spPreparation.speedReading();

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleSubmitForm(event) {
        this.spPreparation.addText(event);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Form handleSubmitForm={this.handleSubmitForm} />
                    </div>
                </div>
                <Output />
            </div>
        )
    }
}

export default SpeedReadingContainer;