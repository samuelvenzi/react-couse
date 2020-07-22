import React from 'react'
import "./UserOutput.css"

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>"By-Tor in defeat, retreats to Hell.</p>
            <p>Snow Dog is victorious, the land of the Overworld" - {props.username}</p>
        </div>
    )
}

export default userOutput