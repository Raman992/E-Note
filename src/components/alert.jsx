import React from 'react'

export const Alert = (props) => {
    return (
        <div>
            <div class="alert" role="alert">
                {props.message}
            </div>
        </div>
    )
}