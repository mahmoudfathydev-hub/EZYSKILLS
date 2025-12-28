import React from 'react'
import "./Button.scss"

export default function Button({ name , className}) {
    return (
        <div>
            <button className={className}>{name}</button>
        </div>
    )
}
