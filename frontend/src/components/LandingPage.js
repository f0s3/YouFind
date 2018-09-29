import React, { Component } from 'react'
import logo from './logo.png'
export default class LandingPage extends Component {
  render() {
    return (
      <div>
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
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="/login">Get Started</a>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
