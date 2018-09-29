import React, { Component } from 'react'
import logo from './logo.png'
export default class LandingPage extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll-trigger" href="">uFind</a>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger"/>Already a user?<a className="btn btn-secondary js-scroll-trigger" href="/login">Sign In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    <header className="masthead text-center text-black d-flex">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-12 mx-auto">
                <img src={logo} id="logo" />
                <h1 className="text-uppercase">
                  <strong>In good people we trust</strong>
                </h1>
                <hr />
              </div>
              <div className=" mx-auto">
                <p className=" mb-5">If you lose your device, there will be more chances to get it back!</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="/register">Get Started</a>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
