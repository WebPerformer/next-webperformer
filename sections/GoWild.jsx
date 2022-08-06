import React from 'react'

import Image from 'next/image'
import rocket from '../assets/svg/rocket.svg'

const GoWild = () => {
  return (
    <section className="go-wild">
        <div className="content">
            <div className="left">
                <Image src={rocket}/>
            </div>
            <div className="right">
                <div className="small-text">
                    <div className="line"></div>
                    <p><span>GO</span> Wild for while</p>
                </div>
                <h5 className="mid-text">
                    Na <span>WEBPERFORMER</span> <br /> seu negócio vai adiante.
                </h5>
                <p className="regular-text">
                    Utilizando <span>tecnologias</span> de ponta e técnicas avançadas de <span>desenvolvimento</span> o seu projeto ganha um visual <span>moderno</span> e <span>intuitivo</span>.
                </p>
            </div>
        </div>
    </section>
  )
}

export default GoWild