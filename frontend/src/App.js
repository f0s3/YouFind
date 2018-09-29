import React from 'react'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import { Route, BrowserRouter, Redirect, Link } from 'react-router-dom'
import DevicesChat from './components/DevicesChat'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import axios from 'axios';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            newDeviceName: ''
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
            name: this.state.newDeviceName,
            messages: [{
                author: this.state.user.name,
                text: '',
                date: Date.now()
            }]
        }
        
        this.setState({
            user: {
                devices: this.state.user.devices.concat([newDevice])
            }
        })

        axios({
            method: 'POST',
            url: `http://127.0.0.1:15000/users/${this.state.user._id}`
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header />
                        <Route path='/login' render={() => !this.state.user ? <LoginForm setUser={user => this.setUser(user)} /> : <Redirect to="/devices" />}/>
                        <Route path='/register' render={() => <RegisterForm />}/>
                        
                        <Route exact path='/' component={LandingPage} />
                                      

                        {/* <Route path='/devices' render={() => <DevicesChat user={this.state.user} />}/> */}
                        <Route path='/devices' render={() => (
                         <div id="devices">
                             {this.state.user.devices.map((device, index) => {
                                return <Link to={`/device/${device._id}`} onClick={device => this.props.selectDevice(device)} key={index}>{device.name}</Link>
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