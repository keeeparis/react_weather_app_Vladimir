import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper" style={{padding: '0 2rem'}}>
                <Link to="/" className="brand-logo">Погода</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Погода</Link></li>
                    <li><Link to="/">Погода</Link></li>
                    <li><Link to="/">Погода</Link></li>
                </ul>
            </div>
        </nav>
    )
}
