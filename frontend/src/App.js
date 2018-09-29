import React from 'react'
import MessageList from './components/MessageList'
import Message from './components/Message'
import SendMessageForm from './components/SendMessageForm'

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <MessageList />
                <SendMessageForm />
                <Message />

            </div>
        );
    }
}

export default App
