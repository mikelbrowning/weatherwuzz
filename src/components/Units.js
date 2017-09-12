import React, { Component } from 'react'

class Units extends Component {
    constructor(props) {
        super(props)
        this.state = {
            useMetric: props.useMetric
        }
    }

    onClick(e) {
        e.preventDefault()
        this.setState({ useMetric: !this.state.useMetric }, function () {
            this.props.onClick()
        })
    }

    render() {
        return (
            <div className="input-container">
                <button onClick={this.onClick.bind(this)}>
                    &deg;{this.state.useMetric ? 'C' : 'F'}
                </button>
            </div>
        )
    }
}

export default Units