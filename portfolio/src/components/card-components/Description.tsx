import React from "react"
import './description.css'

interface DescriptionProps{
    children: React.ReactNode
}

export default function Description(props:DescriptionProps){
    const {children} = props
 
    return(<p className="big-card-description">{children}</p>)
}