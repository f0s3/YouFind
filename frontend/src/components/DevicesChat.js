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

    openChat() {
        this.setState({chatOpened: true})
    }

    selectDevice(device) {
        this.setState({selectedDevice: device})
    }

    render() {
        return (
        <div>
            <div id="devices">
                <DevicesList openChat={this.openChat} selectDevice={device => this.selectDevice(device)} devices={this.props.user.devices}/>
            </div>
            <hr />
            {this.state.chatOpened && (<div id="chat">
                <h2>{this.state.selectedDevice.name}</h2>
                <MessageList messages={this.selectedDevice.messages} />
                <SendMessageForm message={this.state.message} handleInput={this.handleInput} />
            </div>
            )}
        </div>
        )
    }
}
