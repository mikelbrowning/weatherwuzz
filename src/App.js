import React, { Component } from 'react'
import request from 'request-promise'
import './App.css'
import Weather from './components/Weather'
import Input from './components/Input'
import Units from './components/Units'
import Map from './components/Map'



class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            query: '',
            location: 'Djibouti',
            useMetric: false,
            weather: {}
        }
    }

    componentWillMount() {
        this.getWeather()
    }   

    getWeather() {
        let uri = 'https://nodejs-27.appspot.com/q/' + this.state.location + (this.state.useMetric ? '?um=1' : ''),
            options = {
            uri,
            json: true
        }

        request(options)
            .then((w) => {
                this.setState({ error: false, weather: w.pastWeeksWeather, query: w.query }, function () {
                    //console.log(this.state)
                })
            })
            .catch((err) => {
                this.setState({error: true})
            })
    }

    changeUnits() {
        this.setState({ useMetric: !this.state.useMetric }, this.getWeather)
    }

    changeLocation(l) {
        this.setState({ location: encodeURIComponent(l)}, this.getWeather)
    }

    renderQuery() {
        if (this.state.error) {
            return <h3 className="error">Error: please check input and try again.</h3>
        } else {
            return <h3>Observed weather conditions for the {this.state.query}</h3>
        }
        
    }

    render() {
        return (
            <div className="App">
                <header>
                    <h1>WeatherWuzz</h1>
                    <section className="user-input">
                        <Input id="location" placeholder="Enter a location" onKeyUp={this.changeLocation.bind(this)} />
                        <Units onClick={this.changeUnits.bind(this)} useMetric={this.state.useMetric} />
                    </section>
                    <div className="query">{this.renderQuery()}</div>
                </header>
                <div id="map"></div>
                <Weather days={this.state.weather} className={this.state.error ? 'calendar error' : 'calendar'} />
                <footer>
                    <p>*Data is provided by <a href="https://www.worldweatheronline.com/" target="_blank">World Weather Online</a> and is not guaranteed to be accurate. <br/>&copy; 2017 Mikel Browning. All rights reserved.</p>
                </footer>
            </div>
        );
    }
}

export default App;
