import React, { Component } from 'react'

import { HashLink as Link } from 'react-router-hash-link'

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className='menu' id='home'>
                    <nav>
                        <ul>
                            <li><Link smooth to='#home'>Home</Link></li>
                            <li><Link smooth to='#sobre'>Sobre</Link></li>
                            <li><Link smooth to='#contato'>Contato</Link></li>
                        </ul>
                    </nav> 
                </div>
            </header>
        )
    }
}