import React, { Component } from 'react'
import DevicesList from './DevicesList/DevicesList'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import ChatHeader from './ChatHeader';


export default class DevicesChat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: '',
            chatOpened: false,
            selectedDevice: ''
        }
    
        this.handleInput = this.handleInput.bind(this)
        this.openChat = this.openChat.bind(this)
    }

    handleInput(message) {
        this.setState({
            message
        })
        console.log(this.state.message)
    }

    render() {
        return (
        <div>
         <div id="chat">
                <h2>{this.state.selectedDevice.name}</h2>
                <MessageList messages={this.selectedDevice.messages} />
                <SendMessageForm message={this.state.message} handleInput={this.handleInput} />
            </div>
        </div>
        )
    }
}
