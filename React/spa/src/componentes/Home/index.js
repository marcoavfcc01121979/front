import React, { Component } from 'react'

import Contato from '../Contato'
import Inicio from '../Inicio'
import Sobre from '../Sobre'

import '../../style.css'


export default class Home extends Component {
    render() {
        return (
            <div>
                <Inicio />
                <Sobre />
                <Contato />
            </div>
        )
    }
}