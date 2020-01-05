import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data } = this.props

        return (
            <div className="outer">
                <input id={data.id} type={data.type} min={data.min} defaultValue={data.defaultValue} contentEditable={data.contentEditable}></input>
                <i>{data.text}</i>
            </div>
        )
    }
}

export default Input;