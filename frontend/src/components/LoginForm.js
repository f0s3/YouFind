import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'material-ui/Card/Card'
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
            <label>
                Name <input type="text" value={this.state.name} onChange={e => {this.setState({name: e.target.value})}} />
            </label>
            <label>
                Password <input type="password" value={this.state.password} onChange={e => {this.setState({password: e.target.value})}} />
            </label>
            <button onClick={e => this.handleLogin(e)}>Login</button>
            <br />
            <Link to="/register">Not a member yet?</Link>
      </form>
    )
  }
}
