import React from 'react'

import Image from 'next/image'
import seo from '../assets/svg/seo.svg'

const SEO = () => {
  return (
    <section className="seo">
        <div className="content">
            <div className="left">
                <div className="small-text">
                    <div className="line"></div>
                    <p><span>BE</span> Reached</p>
                </div>
                <h5 className="mid-text">
                    <span>SEO</span> implementado <br /> de forma inteligente.
                </h5>
                <p className="regular-text">
                    <span>Estratégias</span> de alto padrão para <br /> <span>potencializar</span> a <span>visibilidade</span> do se negócio
                </p>
            </div>
            <div className="right">
                <Image src={seo}/>
            </div>
        </div>
        <div className="bottom-line"></div>
    </section>
  )
}

export default SEO