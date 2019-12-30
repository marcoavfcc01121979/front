import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default props => (
    <div>
        <header id="main-header">
            <div className="header-content">
                <Link to="/">
                    Blog Programador
                </Link>
                <Link to="/login">
                    Entrar
                </Link>
            </div>
        </header>
    </div>
)