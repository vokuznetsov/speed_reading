import React from 'react'

class Output extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row justify-content-center">
                <div className="col vertical-align">
                    <div className="br-rad-6 min-vh-10 min-w-300-px vertical-align">
                        <h6 id="textfield" type="text"></h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Output;