import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    const style = {
        color: 'white',
        textDecoration: 'none',
        padding: '0 10px'
    }

    const nav = {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        background: 'rgb(4, 38, 150)',
        color: 'white'
    }

    return (    
        <nav style={nav}>
            <Link style={style} to='/'><h1>React Firebase</h1></Link>
            <ul style={{ display: 'flex', listStyle: 'none' }}>
                <Link style={ style } to="/"><li>Home</li></Link>
                <Link style={ style } to="/register"><li>Register</li></Link>
            </ul>
        </nav>
    )
}