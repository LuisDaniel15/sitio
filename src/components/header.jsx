import React from 'react'
import logo from '../assets/images/logo.svg'
import {NavAm} from './navAm'

export function Header() {
  return (
    <header className='flex place-content-between items-center mb-3'>
        <img src={logo} alt="" />
        <NavAm />
    </header>
  )
}

