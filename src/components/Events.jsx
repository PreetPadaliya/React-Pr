import React from 'react'
import Button from './Button'

function Events() {
    const clickHandler = () => {
        alert("Button clicked !");
    }

    return(
        <div>
         <button onClick={clickHandler}>Click me</button>
        </div>
    )
}

export default Events