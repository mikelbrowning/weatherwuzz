import React, {Component} from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: props.value
        }
    }

    onKeyUp(e) {
        if (e.key === 'Enter') {
            e.preventDefault()
            this.setState({ value: e.target.value }, function () {
                this.props.onKeyUp(this.state.value)
            })
        }
    }

    render() {
        return (
            <div className="input-container">
                <input type="text" {...this.props} onKeyUp={this.onKeyUp.bind(this)} />
            </div>
        )
    }
}

export default Input