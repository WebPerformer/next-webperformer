import React from 'react'

import Image from 'next/image'
import fox from '../assets/svg/fox.svg'

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <Image src={fox}/>
      </div>
      <div className="footer-text">
        <p>COMEÇE O SEU WEBSITE HOJE E <br /> <span>FAÇA PARTE DA NOSSA FAMILIA!</span></p>
      </div>
      <div className="copyright">
        <p>Copyright © WebPerformer. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer