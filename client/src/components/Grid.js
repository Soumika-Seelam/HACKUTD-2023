import React from 'react'

export default function Grid (props) {
  
  const cells = props.arrOfObj.map(obj => 
    <div style={{ backgroundColor: `${'#'+Math.random().toString(16).substr(-6)}`}} 
    className="item">{obj}</div>)

  return (

    <div className="container">
      {cells}
    </div>
  )
}