import React from 'react'

class SendMessageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }
    }

    render() {
        return (
            <form className="send-message-form" onSubmit={e => {
                e.preventDefault()
                this.props.handleInput(this.state.message)
                }}>
                <input
                    value={this.state.message}
                    onChange={(e) => {this.setState({message: e.target.value})}}
                    placeholder="SendMessageForm"
                    type="text" />
                    <input type="submit" value="Send" />
            </form>
        )
    }
}

export default SendMessageForm
