import React from 'react'
import Form from "../../../components/Form/Form";
import Output from "../../../components/Output/Output";


class SpeedReadingContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Form />
                    </div>
                </div>
                <Output />
            </div>
        )
    }
}

export default SpeedReadingContainer;