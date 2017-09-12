import React, { Component } from 'react'
class Day extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lat: '',
            lng: ''
        }
    }

    render() {
        return (
            <div id="map" style={{'height':'25vw'}}></div>
        )
    }
}

export default Day