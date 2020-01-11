import React from 'react';

class Radio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const radios = this.props.options.map((value, index) => {
            const checked = value == this.props.selectedOption ? true : false;
            const key = "radio-" + index;
            return (
                <div className="form-check-inline" key={key}>
                    <input className="form-check-input" type="radio" id={index} value={value} checked={checked} onChange={this.props.onChange}>
                    </input>
                    <label className="form-check-label" htmlFor={index}>
                        {value}
                    </label>
                </div >
            )
        })

        return <div>{radios}</div>
    }
}

export default Radio;