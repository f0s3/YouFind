import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './creative.css';
import LandingPage from './components/LandingPage'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
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
            renderEmailQR: false,
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
            url: `http://127.0.0.1:15000/users/${this.state.user._id}/devices/${newDevice.name}`
        })

        this.selectDevice(newDevice)
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
                         <div id="devices">
                             <div style={{display: 'flex', textAlign: 'center', color: 'black'}}>
                                 {this.state.user.devices.map((device, index) => {
                                return (
                                        <div onClick={device => this.selectDevice(device)} style={{width: '128px', boxShadow: '3px 3px 3px #000'}} key={index}>
{/*                                             <Link
                                                to={`/device/${device._id}`}
                                            >{device.name}</Link>  device._id */}
                                          
                                            <h2>{device.name}</h2> {/* device._id */}
                                            <hr/>
                                            
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
                             </div>
                             <input value={this.state.newDeviceName} onChange={e => this.setState({newDeviceName: e.target.value})} />
                             <button onClick={() => this.createDevice()} className="btn btn-xl btn-primary">+</button>
                        </div>
                        )}/>

                </div>
            </BrowserRouter>
        )
    }
}

export default App
