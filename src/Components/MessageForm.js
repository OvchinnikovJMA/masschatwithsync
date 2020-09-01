import React, {useState} from 'react'

const MessageForm = (props) => {
    const [text, SetText] = useState('');
    const handleText = (event) => {   
        SetText(event.target.value);
    }
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