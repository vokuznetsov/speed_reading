import React from 'react';
import { DEFAULT_TEXT } from "../../constant";

class Textarea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="outer">
                <textarea className="min-vh-20 min-vw-40 text-secondary" id={this.props.id} defaultValue={DEFAULT_TEXT}></textarea>
            </div>
        )
    }
}

export default Textarea;