import React from 'react'

const ProgressBar = ({ percentage }) => {
    return (
        <div style={{ width: "100%",  height: "30px" }} className="bg-gray-800 mt-4 rounded">
            <div style={{ width: "100%" }} className="text-center z-50 text-white font-bold absolute mt-1">{ percentage }</div>
            <div style={{ width: percentage, height: "100%" }} className="bg-green-600 rounded-l"></div>
        </div>
    )
}

export default ProgressBar
