import React from "react";

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

const HeroTitleStyle = {
    fontFamily: 'Inter',
    fontStyle: 'italic',
    fontWeight: '800',
    fontSize: '7rem'
} as React.CSSProperties

export default function HeroImage() {
    return(
        <div style={HeroImageStyle}>
            <h1 style={HeroTitleStyle}><span style={{color:'pink'}}>L</span>unfmans's Portfolio</h1>
        </div>
    )
}