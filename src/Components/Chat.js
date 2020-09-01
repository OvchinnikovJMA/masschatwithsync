import React from 'react';
import Message from './Message'
const Chat = (props) => {
    return(
        <div className="Chat-container">
            {props.data.map(message => {
                return (<Message data={message}/>)
            })}
        </div>
    )
}

export default Chat