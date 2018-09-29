import React, { Component } from 'react'
import axios from 'axios'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        password: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  handleLogin(e) {
    axios(
        {
            method: 'GET',
            url: '127.0.0.1:15000/login',
            body: {
                username: this.state.name,
                password: this.state.password,
            }
        }
    )
    e.preventDefault()
  }

  render() {
    return (
      <form onSubmit={e => this.handleLogin(e)}>
        <label>
            Name <input type="text" value={this.state.name} onChange={e => {this.setState({name: e.target.value})}} />
        </label>
        <label>
            Password <input type="password" value={this.state.password} onChange={e => {this.setState({password: e.target.value})}} />
        </label>
        <button onClick={e => this.handleLogin(e)}>Login</button>
      </form>
    )
  }
}
