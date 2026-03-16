import React from 'react'

function Sidebar(props) {
  return (
    <div>
        <ul>
            {props.navigationItems.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  )
}

export default Sidebar;