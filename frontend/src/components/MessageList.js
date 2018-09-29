import React from 'react'

const DUMMY_DATA = [
    {
        senderId: '3m0710n',
        text: 'testing chat'
    },
    {
        senderId: 'f0s30n3',
        text: 'Great?'
    },
    {
        senderId: '3m0710n',
        text: 'Yep'
    }
]

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <div className="message-username">{message.senderId}</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList
