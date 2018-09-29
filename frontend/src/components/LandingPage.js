import React, { Component } from 'react'
import logo from './logo.png'
export default class LandingPage extends Component {
  render() {
    return (
      <div>
    <header class="masthead text-center text-black d-flex">
          <div class="container my-auto">
            <div class="row">
              <div class="col-lg-12 mx-auto">
                <img src={logo} id="logo" />
                <h1 class="text-uppercase">
                  <strong>In good people we trust</strong>
                </h1>
                <hr />
              </div>
              <div class=" mx-auto">
                <p class=" mb-5">If you lose your device, there will be more chances to get it back!</p>
                <a class="btn btn-primary btn-xl js-scroll-trigger" href="/login">Get Started</a>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
