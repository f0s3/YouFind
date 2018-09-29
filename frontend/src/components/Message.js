import React from 'react'

class Message extends React.Component {
    render() {
        return (
            <div className="message">
            <span className="author">{this.props.senderId}</span>
            {this.props.text}
            </div>
        )
    }
}

export default Message
