import React from "react"
import './card-title.css'

interface CardTitleProps{
    title: string,
}

export default function CardTitle(props:CardTitleProps){
    const {title} = props
 
    const firstLetter = title[0]
    const nextLetters = title.slice(1)

    return(
        <h3 className="big-card-title">
            <span className="first-letter">{firstLetter}</span>
            {nextLetters}
        </h3>)
}