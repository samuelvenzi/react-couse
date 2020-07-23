import React from 'react'

const validation = (props) => {
    const textWarningStyle = {
        color: "red"
    }

    const textInfoStyle = {
        color: "blue"
    }

    let showText = null
    if (props.textLength < 5) {
        showText = (
            <p style={textWarningStyle}>Text is too short!</p>
        )
    } else {
        showText = (
            <p style={textInfoStyle}>Text is long enough.</p>
        )
    }

    return <div> {showText} </div>
}

export default validation