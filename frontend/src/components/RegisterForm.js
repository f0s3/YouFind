import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
        name: '',
        password: '',
        email: '',
    }

    this.handleRegister = this.handleRegister.bind(this)
}

handleRegister(e) {
    e.preventDefault()
    axios({
            method: 'POST',
            url: 'http://127.0.0.1:15000/register',
            body: {
                name: this.state.name,
                password: this.state.password,
                email: this.state.email,
                devices: []
            }
        })
}

render() {
    return (
      <div className=" text-center text-black d-flex" id="registerPage">
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

        <form onSubmit={e => this.handleRegister(e)}>
        <h1 className="h3 mb-3 font-weight-normal">Register! It is free!</h1>

        <li>
        <label>
            <input type="text" value={this.state.name} onChange={e => {this.setState({name: e.target.value})}} placeholder="Name" />
        </label>
        </li>
        <li>
        <label>
             <input type="email" value={this.state.email} onChange={e => {this.setState({email: e.target.value})}} placeholder="Email" />
        </label>
        </li>
        <li>
        <label>
            <input type="password" value={this.state.password} onChange={e => {this.setState({password: e.target.value})}} placeholder="Password" />
        </label>
        </li>


        <li>
        <button className="btn btn-secondary js-scroll-trigger" onClick={e => this.handleRegister(e)}>Register</button>
        </li>
        <br />

        <Link to="/login">Already a member?</Link>

      </form>
      </ul>
      </div>
      </div>
    )
  }
}
