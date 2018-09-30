import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './creative.css';
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import LandingPage from './components/LandingPage'
import { Route, BrowserRouter, Redirect, Link } from 'react-router-dom'
import DevicesChat from './components/DevicesChat'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import axios from 'axios';
import QRCode from 'qrcode.react'


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            newDeviceName: '',
            selectedDevice: null
        }

        this.createDevice = this.createDevice.bind(this)
    }

    

    setUser(user) {
        this.setState({user: user.data, redirect: true})
    alert()

    }

    selectDevice(device) {
        this.setState({
            selectedDevice: device
        })
    }

    createDevice() {
        const newDevice = {
            name: this.state.newDeviceName
        }

        this.setState({
            user: {
                devices: this.state.user.devices.concat([newDevice])
            }
        })

        axios({
            method: 'POST',
            url: `http://127.0.0.1:15000/users/${this.state.user._id}/devices/${this.state.selectedDevice.name}`
        })
    }

    showEmailCode() {
        
    }

    showChatCode() {
        
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">

                        <Route path='/login' render={() => !this.state.user ? <LoginForm setUser={user => this.setUser(user)} /> : <Redirect to="/devices" />}/>
                        <Route path='/register' render={() => <RegisterForm />}/>

                        <Route exact path='/' component={LandingPage} />


                        {/* <Route path='/devices' render={() => <DevicesChat user={this.state.user} />}/> */}
                        <Route path='/devices' render={() => (
                         <div id="devices" style={{display: 'flex'}}>
                             {this.state.user.devices.map((device, index) => {
                                return (
                                        <div style={{width: '150px', height: '150px'}} key={index}>
                                            <Link
                                                to={`/device/${device._id}`}
                                                onClick={device => this.props.selectDevice(device)}
                                            >{device.name}</Link> {/* device._id */}
                                            <button onClick={() => {
                                                this.setState({renderEmailQR: true})
                                            }}>Email QR</button>
                                            {/* <button onClick={() => this.showChatCode()}>Chat QR</button> */}
                                            {
                                            this.state.renderEmailQR && <QRCode value={`mailto:${this.state.user.email}?subject="Hey, ${this.state.user.name}! I've found your ${this.state.selectedDevice.name}"`} />
                                            }
                                            </div>
                                )
                             })}
                             <input value={this.state.newDeviceName} onChange={e => this.setState({newDeviceName: e.target.value})} />
                             <button onClick={() => this.createDevice()}>+</button>
                        </div>
                        )}/>

                </div>
            </BrowserRouter>
        )
    }
}

export default App
