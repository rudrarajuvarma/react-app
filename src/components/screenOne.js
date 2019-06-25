import React, { Component } from 'react'

class ScreenOne extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "varma" }
    }

    paggeTwo = () => {
        this.props.history.push({ pathname: '/screenTwo' })
    }

    render() {
        return (
            <p onClick={this.paggeTwo}>{this.state.name}</p>
        )
    }

}
export default ScreenOne;