import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './creative.css';
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import LandingPage from './components/LandingPage'
import { Route, BrowserRouter } from 'react-router-dom'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            message: ''
        }

        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(message) {
        this.setState({message})
        console.log(this.state.message)
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">

                        <Route exact path='/' component={LandingPage} />

                        <Route path='/device/:id' render={() => (
                            <div id="chat">
                                <MessageList />
                                <SendMessageForm message={this.state.message} handleInput={this.handleInput} />
                            </div>
                        )}/>

                    <Route path="/devices" render={() => (
                        <div>
                            Devices
                        </div>
                    )} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App
