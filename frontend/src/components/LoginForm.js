import React, { Component } from 'react'
import axios from 'axios'
import { Card } from 'material-ui/Card/Card'
import Button from '@material-ui/core/Button'

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        password: ''
    }

    this.handleLogin = this.handleLogin.bind(this)
  }

  async handleLogin(e) {
    e.preventDefault()
    const user = await axios(
        {
            method: 'GET',
            url: `http://127.0.0.1:15000/login/${this.state.name}/${this.state.password}`,
        }
    )
    console.log(`http://127.0.0.1:15000/login/${this.state.name}/${this.state.password}`)
    alert()
    this.props.setUser(user)
  }

  render() {
    return (
        <form onSubmit={e => this.handleLogin(e)}>
        <Card>
            
        <label>
            Name <input type="text" value={this.state.name} onChange={e => {this.setState({name: e.target.value})}} />
        </label>
        <label>
            Password <input type="password" value={this.state.password} onChange={e => {this.setState({password: e.target.value})}} />
        </label>
        <button onClick={e => this.handleLogin(e)}>Login</button>
        </Card>
      </form>
    )
  }
}
