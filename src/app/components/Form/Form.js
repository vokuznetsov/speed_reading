import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form id="accept-text-form">
                <div className="border border-2 border-dark rounded">
                    <p className="my-3">Вставьте текст, который хотите быстро прочитать</p>
                    <div className="outer">
                        <textarea className="min-vh-20 min-vw-40" id="text-input"></textarea>
                    </div>
                </div>
                <div className="outer">
                    <input id="speed-input" type="number" min="1" defaultValue="250" contentEditable="true"></input>
                    <i>слов/мин</i>
                </div>
                <div className="outer">
                    <input id="display-words" type="number" min="1" defaultValue="3" contentEditable="true"></input>
                    <i>кол-во слов на консоли</i>
                </div>
                <button className="btn btn-light-style" id="send-button" type="submit">Отправить</button>
            </form>
        )
    }
}

export default Form;