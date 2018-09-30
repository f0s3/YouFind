import React, { Component } from 'react'
import DevicesList from './DevicesList/DevicesList'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import ChatHeader from './ChatHeader';
import axios from 'axios';

export default class DevicesChat extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: '',
        }
    
        this.handleInput = this.handleInput.bind(this)
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            axios.get(`http://127.0.0.1:15000/users/${this.props.user._id}/devices/${this.props.device._id}/messsages`)
        }, 5000)
    }

    componentWillUnmount = () => {
      clearInterval(this.interval)
    }
    

    handleInput(message) {
        this.setState({
            message
        })

        axios.post(`http://127.0.0.1:15000/users/${this.props.user._id}/devices/${this.props.device._id}/messsages`, 
            {
                author: this.props.user.name,
                text: message
            })
        }

    render() {
        return (
        <div>
         <div id="chat">
                <h2>{this.props.device.name}</h2>
                <MessageList messages={this.props.device.messages} />
                <SendMessageForm message={this.state.message} handleInput={this.handleInput} />
            </div>
        </div>
        )
    }
}
