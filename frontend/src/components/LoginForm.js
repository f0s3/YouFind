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
      <div className=" text-center text-black d-flex" id="loginPage">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="/">uFind</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">

            </ul>
          </div>
        </div>
      </nav>
      <div>
      <ul>
        <form onSubmit={e => this.handleLogin(e)}>
        <h1 className="h3 mb-3 font-weight-normal">Authorize Yourself</h1>
        <li>
            <label>
              <input type="text" value={this.state.name} onChange={e => {this.setState({name: e.target.value})}} placeholder="Name" />
            </label>
            </li>
            <li>
            <label>
                 <input type="password" value={this.state.password} onChange={e => {this.setState({password: e.target.value})}} placeholder="Password" />
            </label>
            </li>
            <li>
            <button className="btn btn-secondary js-scroll-trigger" onClick={e => this.handleLogin(e)}>Login</button>
            </li>
            <br />
            <Link to="/register">Not a member yet?</Link>
      </form>
      </ul>
      </div>
      </div>
    )
  }
}
