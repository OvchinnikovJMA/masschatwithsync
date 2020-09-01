import React from 'react';
import Message from './Message'

const Chat = (props) => {
    return(
        <div className="Chat-container">
            {/**
             * Рендер <Message> с пропсом в виде message для каждого message из props.data
             * @param {{text: string}} message Объект сообщения
             * @param {Array[message]} props.data Массит сообщений
             */}
            {props.data.map(message => {
                return (<Message data={message}/>)
            })}
        </div>
    )
}

export default Chat