import React, { Component } from 'react'
import axios from 'axios'

export default class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        password: ''
    }

    this.handleRegister = this.handleRegister.bind(this)
  }

  handleRegister(e) {
    axios(
        {
            method: 'POST',
            url: 'http://127.0.0.1:15000/register',
            body: {
                name: this.state.name,
                password: this.state.password,
                devices: [
                    {
                        name: '',
                        messages: [
                            {
                                text: '',
                                date: Date.now()
                            }
                        ]
                    }
                ]
            }
        }
    )
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={e => this.handleRegister(e)}>
        <label>
            Name <input type="text" value={this.state.name} onChange={e => {this.setState({name: e.target.value})}} />
        </label>
        <label>
            Password <input type="password" value={this.state.password} onChange={e => {this.setState({password: e.target.value})}} />
        </label>
        <button onClick={e => this.handleRegister(e)}>Register</button>
      </form>
    )
  }
}
