import React, { Component } from 'react'
import Day from '../components/Day'

class Weather extends Component {
    constructor(props) {
        super(props)
        this.state = {
            days: props.days
        }
    }
    render() {
        let days
        if (this.props.days && this.props.days.length) {
            days = this.props.days.map(day => {
                return (
                    <Day key={day.date} {...day} />
                    )
                
            })
        }
        return (
            <div className={this.props.className}>
                {days}
            </div>
        )
    }
}

export default Weather