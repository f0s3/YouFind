import React from 'react'
import Message from './Message'

class MessageList extends React.Component {
    render() {
        return (
            <div className="message-list">
                {this.props.messages.map((message, index) => {
                    return (
                        <div key={index} className="message">
                            <Message senderId={message.author} text={message.text} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MessageList
