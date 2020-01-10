import React from 'react'
import * as paramConfig from './config'
import Input from '../../../components/Input/Input';

class InputParameters extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Input data={paramConfig.words_by_minute_props} />
                <Input data={paramConfig.number_words_props} />
            </React.Fragment>

        )
    }
}

export default InputParameters;