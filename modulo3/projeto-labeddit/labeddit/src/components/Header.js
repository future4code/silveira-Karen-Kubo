import React from 'react'
import { HeaderDiv, Image } from '../styles/Header-style'
import Logo from '../assets/Logo.gif'

const Header =()=> {
  return (
    <HeaderDiv>
      <Image src={Logo} alt="LabEddit Logo" />
    </HeaderDiv>
  )
}

export default Header;
