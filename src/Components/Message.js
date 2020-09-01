import React from 'react'

const Message = (props) => {
    return (
        <div className="message">
            <p className={props.data.text.length > 16 ? 'long' : 'short'}>{props.data.text}</p>
        </div>
    )
}

export default Message;