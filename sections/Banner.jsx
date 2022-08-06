import React from 'react'

// icons
import { IoIosArrowForward } from 'react-icons/io'

const Banner = () => {
  return (
    <section className="banner">
        <div className="banner-wrapper">
            <p className="small-text">Seja bem-vindo, a <span>Web</span>Performer</p>
            <h4 className="large-text">SOLUÇÕES <br /> <span>WEB E DESIGN</span></h4>
            <div className="line"></div>
            <button className="banner-btn">Ver mais <IoIosArrowForward/></button>
        </div>
    </section>
  )
}

export default Banner