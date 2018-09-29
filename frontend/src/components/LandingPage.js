import React, { Component } from 'react'
import logo from './logo.png'
export default class LandingPage extends Component {
  render() {
    return (
      <div>
      <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href="">uFind</a>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger"/>Already a user?<a className="btn btn-secondary js-scroll-trigger" href="/login">Sign In</a>
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
