import React from 'react'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import Header from './components/Header'
import LandingPage from './components/LandingPage'
import { Route, BrowserRouter } from 'react-router-dom'
import DevicesChat from './components/DevicesChat'
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: 'this.state.name',
                password: 'this.state.password',
                devices: [
                    {
                        name: 'ERGO',
                        messages: [
                            {
                                text: '',
                                date: Date.now()
                            }
                        ]
                    },
                    {
                        name: 'iPhone',
                        messages: [{
                                text: 'lost',
                                date: Date.now()
                            },
                            {
                                text: 'found',
                                date: Date.now()
                            },
                            {
                                text: 'deal',
                                date: Date.now()
                            }
                    ]
                    }
                ]
            }
        }
    }

    setUser(user) {
        this.setState({user})
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Header />
                        <Route path='/login' render={() => <LoginForm setUser={user => this.setUser(user)} />}/>
                        <Route path='/register' render={() => <RegisterForm />}/>
                        
                        <Route exact path='/' component={LandingPage} />

                        <Route path='/devices' render={() => <DevicesChat user={this.state.user} />}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
