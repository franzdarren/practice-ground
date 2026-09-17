import React from 'react'
import Win from './Win.jsx'
import Lose from './Lose.jsx'

export default function Gamble() {
    const gamble = () => {
        const win = Math.random() <0.5;
        if(win) {
            console.log("W");
            return <Win/>
        } else {
            console.log("L");
            return <Lose/>
        }
    }

    return (
        <button onClick={() => gamble()}>GAMBLE</button>
    )

}
