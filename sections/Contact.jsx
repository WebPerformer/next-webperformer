import React from 'react'

import { BiMap, BiEnvelope } from 'react-icons/bi'
import { GiSmartphone } from 'react-icons/gi'

import TextField from '@mui/material/TextField'
import { styled } from '@mui/styles'

const Contact = () => {

    styled(TextField, [])

  return (
    <section className="contact">
        <div className="content">
            <div className="contact-title">
                <div className="line"></div>
                <h1 className='mid-text'>PROCURANDO POR UM <br /> SERVIÇO PERSONALIZADO?</h1>
            </div>
            <div className="contact-wrapper">
                <div className="contact-infos">
                    <h2>Qual é a sua história?</h2>
                    <h3>Entre em contato</h3>
                    <p className="slogan">Sempre disponivel para freelancing. <br /> Sinta-se livre para entrar em contato comigo. </p>
                    <div className="contact-icons">
                        <p><BiMap/> São Paulo, Brasil</p>
                        <p><BiEnvelope/> gabrielsilvaaraujo16@gmail.com</p>
                        <p><GiSmartphone/> +55 (11) 96028-1403</p>
                    </div>
                </div>
                <div className="contact-forms">
                    <h3 className="forms-header">Diga-nos o que deseja!</h3>
                    <form noValidate autoComplete="off">
                        <TextField className="input" id="outlined-basic" label="Email" type="email" variant="outlined" required/>
                        <TextField className="input" id="outlined-basic" label="Assunto" type="text" variant="outlined" required/>
                        <TextField
                            className="input"
                            id="outlined-multiline-static"
                            label="Descrição"
                            type="text"
                            multiline
                            rows={4}
                            required
                        />
                        <button>Enviar</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact