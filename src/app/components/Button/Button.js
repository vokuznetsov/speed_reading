import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="btn btn-light-style" id={this.props.id} onClick={this.props.onClick} type={this.props.type}>{this.props.name} </button>
        )
    }
}

export default Button;