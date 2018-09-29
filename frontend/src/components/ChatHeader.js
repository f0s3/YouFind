import React, { Component } from 'react'
import { Card } from 'material-ui';

export default function ChatHeader(props) {
    return (
        <Card>
            <h2>Device name: {props.deviceName}</h2>
        </Card>
    )
}