import React from 'react'
import './CSS/alert.css'

export const Alert = (props) => {
    return (
        <div>
            <div className="alert" role="alert">
                {props.message}
            </div>
        </div>
    )
}