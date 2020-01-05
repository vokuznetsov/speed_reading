import React from 'react';
import { SEND as send_buuton } from '../../constant';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button className="btn btn-light-style" id="send-button" type="submit">{send_buuton}</button>
        )
    }
}

export default Button;