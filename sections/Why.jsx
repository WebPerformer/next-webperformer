import React from 'react'

import Image from 'next/image'
import fastest from '../assets/svg/fastest.svg'
import design from '../assets/svg/design.svg'
import secure from '../assets/svg/secure.svg'
import optimize from '../assets/svg/optimize.svg'

const Why = () => {
  return (
    <section className="why">
        <div className="content">
            <div className="title">
                <div className="small-text">Por que a WEBPERFORMER?</div>
                <div className="mid-text">Uma oportunidade de <br /> crescimento exponensial</div>
            </div>
            <div className="cards-wrapper">
                <div className="card">
                    <div className="icon"><Image src={fastest} /></div>
                    <div className="card-title">
                        <div className="line"></div>
                        <p>Maior rapidez</p>
                    </div>
                    <div className="card-text">
                        <p>Rapidez e agilidade em seu negócio, espere com paciência e ataque com rapidez.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon"><Image src={design} /></div>
                    <div className="card-title">
                        <div className="line"></div>
                        <p>Melhor design</p>
                    </div>
                    <div className="card-text">
                        <p>Designs pensados e criados do jeito que você quiser, layouts intuitivos e interativos.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon"><Image src={secure} /></div>
                    <div className="card-title">
                        <div className="line"></div>
                        <p>Alta Segurança</p>
                    </div>
                    <div className="card-text">
                        <p>Com maior segurança nos nossos sistemas, abordamos critérios de alto padrão para manter seu negócio protegido.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="icon"><Image src={optimize} /></div>
                    <div className="card-title">
                        <div className="line"></div>
                        <p>Super Otimizado</p>
                    </div>
                    <div className="card-text">
                        <p>Com técnologia de ponta e Frameworks que deixarão o seu sistema mais rápido.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Why