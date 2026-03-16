import React from 'react'

function Button(props) {

  return (
    <div>
        <button onClick={() => props.setCount(props.count -1)}>Decrement</button>
        <button onClick={() => props.setCount(0)}>Reset</button>
        <button onClick={() => props.setCount(props.count + 1)}>Increment</button>
    </div>
    
  )
}

export default Button