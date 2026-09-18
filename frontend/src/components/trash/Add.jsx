import React from 'react'
import Person from './Person.jsx';

export default function Add() {
    const addSomeoneRandom = (name) => {
        console.log(name);
    }
    return (
        <button onClick={() => addSomeoneRandom("lebron")}>add some rando</button>
    )

//   return (
//     <button onClick={addSomeoneRandom}>add some rando</button>
//   )4
}
