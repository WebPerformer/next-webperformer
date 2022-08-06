import React from 'react'

import Image from 'next/image'
import personal from '../assets/images/personal.jpg'
import fox from '../assets/svg/fox.svg'

const Personal = () => {
  return (
    <section className="personal">
        <div className="content">
            <div className="personal-wrapper">
                <div className="personal-img">
                    <Image src={personal}/>
                </div>
                <div className="personal-desc">
                    <p>Olá, como você está? Como Fundador da WEBPERFORMER posso dizer com propriedade que nosso serviços são de <span>qualidade</span> excepcional.</p>
                    <p>Eu sou <span>responsável</span> por cuidar do <span>desenvolvimento</span> do seu sistema. Garantindo um ótimo <span>trabalho</span> e <span>entrega</span>.</p>
                    <h3>Gabriel Silva Araujo</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Personal