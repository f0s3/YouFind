import React from 'react'
import Message from './Message'

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
                            <Message senderId={message.senderId} text={message.text} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList
