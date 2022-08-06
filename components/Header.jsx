import React from 'react'

import Image from 'next/image'

import logo from '../assets/svg/logo.svg'

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Image src={logo}/>
      </div>
    </div>
  )
}

export default Header