import React from "react";
import './hero-image.css'

const HeroImageStyle = {
    width: '100vw',
    height:'100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center' as const,
    color:'white',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
} as React.CSSProperties

export default function HeroImage() {
    return(
        <section style={HeroImageStyle}>
        <div >
            <h1 className='title'><span style={{color:'pink'}}>L</span>unfmans's Portfolio</h1>
            <h2 className='subtitle'>Fullstack Developer</h2>
        </div>
        </section>

    )
}