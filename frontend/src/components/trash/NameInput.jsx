import {useState} from 'react'

function NameInput() {

    let [name, setName] = useState('');

function changeName(event){
    setName(event.target.value)
}
    
  return (
    <>
    <h1>NAME INPUT</h1>
    <input onChange={changeName}></input>
    <h3>name is {name}</h3>
    </>
  )
}

export default NameInput