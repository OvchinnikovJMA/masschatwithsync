import React, {useState} from 'react'

const MessageForm = (props) => {
    /**
     * State, Текст сообщения
     * @type {string}
     */
    const [text, SetText] = useState('');
    /**
     * Изменяет state( текст сообщения) при любом изменении текста в textarea
     * @param {Object} event Объект события
     */
    const handleText = (event) => {   
        SetText(event.target.value);
    }
    /**
     * При не пустом поле ввода сообщения вызывает переданную через props функцию pushMessages 
     */
    const SendMessage = () => {
        text && props.add({text: text});
        SetText('');
    }

    return (
        <div className="MessageForm-container">
            <textarea type="text" wrap="soft" placeholder="Написать сообщение..." value={text} onChange={handleText}/>
            <button onClick={SendMessage}>Отправить</button>
        </div>
    )
}

export default MessageForm;