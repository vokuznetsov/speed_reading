import React from 'react'
import * as consts from '../constant';
import Textarea from '../../../components/Textarea/Textarea';

class InputText extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.isEnable) {
            return <TextInput />;
        }

        return <UrlInput />;
    }
}

function TextInput(props) {
    return (
        <div className="border border-2 border-dark rounded">
            <p className="my-3">{consts.TEXT_FOR_SPEED_READING}</p>
            <Textarea id="text-input" />
        </div>
    );
}

function UrlInput(props) {
    return (
        <div className="warning">
            Warning!
        </div>
    );
}

export default InputText;