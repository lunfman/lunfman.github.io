import React from "react"
import './card.css'

interface BigCardProps{
    positionNumber: number
}

export default function BigCard(props: BigCardProps){

    const {positionNumber} = props


    return(
        <div className={positionNumber === 1? 'big-card-1' : 'big-card-2'}>
            <h2>title</h2>
            <p>links</p>
            <p>description</p>
            <p>stack</p>


        </div>
    )
}