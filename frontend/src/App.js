import React from 'react'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import { Route, BrowserRouter } from 'react-router-dom'
import RegisterForm from './components/RegisterForm';
import ChatHeader from './components/ChatHeader';

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
                    <Header />
                        <Route exact path='/' component={LandingPage} />

                        <Route path='/device/:id' render={() => (
                            <div id="chat">
                                <ChatHeader />
                                <MessageList />
                                <SendMessageForm message={this.state.message} handleInput={this.handleInput} />
                              </div>
                        )} />

                        <Route path='/register' component={RegisterForm} />

                        <Route path='/login' render={() => (
                            <form className="form login"></form>    
                        )} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App
