import React from 'react'
const Button = ({ onClick }) => {
  return (
    <div>
        <button className='btn' onClick={onClick}>
          Show Intro
        </button>
    </div>
  )
}

export default Button