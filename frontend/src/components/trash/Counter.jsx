import {useState} from 'react'

function Counter({numToAdd}) {
    let [count, setCount] = useState(0);
  return (
    <div>
        <p>counter: {count}</p>
        <button onClick={()=>setCount(currentCount=>currentCount+numToAdd)}>add {numToAdd}</button>
    </div>
  )
}
export default Counter;
