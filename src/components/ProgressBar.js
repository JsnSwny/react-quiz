import React, { Component } from 'react'

export class ProgressBar extends Component {
    
    render() {
        return (
            <div style={{ width: "100%",  height: "30px" }} className="bg-red-500 mt-4 rounded">
                <div style={{ width: this.props.percentage, height: "100%" }} className="bg-green-400 rounded-l"></div>
            </div>
        )
    }
}

export default ProgressBar
