import React from 'react'
//destructuring
function Person({name = "john doe", age, active}) {
  return (
    <div className={active ? "info-card" : "info-card info-card--inactive"}>
        <h2>person</h2>
        <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
        </ul>
    </div>
  )
}

export default Person