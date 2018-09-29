import React, { Component } from 'react'
import DeviceCard from '../DeviceCard'
import axios from 'axios'

export default class DevicesBox extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        {this.props.devices.map((device, index) => {
          return <p onClick={device => this.props.selectDevice(device)} key={index}>{device.name}</p>
        })}
      </div>
    )
  }
}
