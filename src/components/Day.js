import React, { Component } from 'react'

class Day extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: "2000-01-01",
            high: "100°",
            low: "-10°",
            avg: "99°",
            conds: "http://cdn.worldweatheronline.net/images/wsymbols01_png_64/wsymbol_0001_sunny.png"
        }
    }

    renderDate() {
        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
            d = this.props.date
        return (
            <div className="date" title={new Date(d).toString()}>
                <div className="month">{months[parseInt(d.substr(5, 2)) - 1]}</div>
                <div className="dayofweek">{d.substr(8, 2)}</div>
            </div>
        )
    }

    render() {
        return (
            <section className="day">
                {this.renderDate()}             
                <div className="temp" title={'Average Temp: ' + this.props.avg}>{this.props.avg}</div>
                <div>
                    <div className="high" title={'High: ' + this.props.high}>{this.props.high}</div>
                    <div className="low" title={'Low: ' + this.props.low}>{this.props.low}</div>
                </div>
                <div className="img"><img src={this.props.conds} /></div> 
            </section>
        )
    }
}

export default Day