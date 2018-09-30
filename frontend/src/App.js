import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './creative.css';
import LandingPage from './components/LandingPage'
import DevicesChat from './components/DevicesChat'
import { Route, BrowserRouter, Redirect, Link } from 'react-router-dom'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import axios from 'axios';


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: null,
            newDeviceName: '',
            renderEmailQR: false,
            selectedDevice: null
        }

    }

    setUser(user) {
        this.setState({user: user.data, redirect: true})
    }

    selectDevice(device) {
        this.setState({selectedDevice: device})
        const newDevice = {
            name: this.state.newDeviceName
        }
/* 
        this.setState({
            user: {
                devices: this.state.user.devices.concat([newDevice])
            }
        })

        axios({
            method: 'POST',
            url: `http://127.0.0.1:15000/users/${this.state.user._id}/devices/${newDevice.name}`
        })
 */
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">

                        <Route path='/login' render={() => !this.state.user ? <LoginForm setUser={user => this.setUser(user)} /> : <Redirect to="/devices" />}/>
                        <Route path='/register' render={() => <RegisterForm />}/>

                        <Route exact path='/' component={LandingPage} />

                        <Route path='/device' render={() => <DevicesChat user={this.state.user} device={this.state.selectedDevice} />} />


                        {/* <Route path='/devices' render={() => <DevicesChat user={this.state.user} />}/> */}
                        <Route path='/devices' render={() => (
                         <div id="devices">
                            <div style={{display:'flex', flexDirection:'column'}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0', textAlign: 'center', color: 'black'}}>
                                   {this.state.user.devices.map((device, index) => {
                                     return (
                                         <div onClick={device => this.selectDevice(device)} style={{margin: '5px', padding: '5px', boxShadow: '-3px 3px 5px #000'}} key={index}>
                                            <h2>{device.name}</h2> {/* device._id */}
                                            <hr/>
                                            <Link
                                                to={`/device`}
                                                >Open chat</Link>
                                            <hr/>

                                            <button onClick={() => {
                                                this.setState({renderEmailQR: true})
                                                // console.log(`https://chart.googleapis.com/chart?cht=qr&chl=MATMSG%3ATO%3A${encodeURIComponent(this.state.user.email)}%3BSUB%3A${encodeURIComponent('Found '+this.state.selectedDevice.name)}%3BBODY%3A%3B%3B&chs=180x180&choe=UTF-8&chld=L|2`)
                                            }}>Email QR</button>

                                            {/* <button onClick={() => this.showChatCode()}>Chat QR</button> */}
                                            {/* /users/Anonymous/devices/${device._id}/messages */}
                                            {
                                                // this.state.renderEmailQR && <img src={`mailto:${this.state.user.email}?subject="Hey, ${this.state.user.name}! I've found your ${this.state.selectedDevice.name}"`} />
                                                this.state.renderEmailQR && <img src={`https://chart.googleapis.com/chart?cht=qr&chl=MATMSG%3ATO%3A${encodeURIComponent(this.state.user.email)}%3BSUB%3A${encodeURIComponent('Found '+this.state.selectedDevice.name)}%3BBODY%3A%3B%3B&chs=180x180&choe=UTF-8&chld=L|2`} />
                                            }
                                            </div>
                                )
                            })}
                                </div>
                                <div style={{justifyContent: 'center', display: 'flex'}}>
                                    <input value={this.state.newDeviceName} onChange={e => this.setState({newDeviceName: e.target.value})} />
                                    <button onClick={() => this.createDevice()} className="btn btn-xl btn-primary">+</button>
                                </div>
                                </div>
                             </div>
                        )}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
