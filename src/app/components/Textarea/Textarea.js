import React from 'react';

class Textarea extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="outer">
                <textarea className="min-vh-20 min-vw-40" id={this.props.id}></textarea>
            </div>
        )
    }
}

export default Textarea;