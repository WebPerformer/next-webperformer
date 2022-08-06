import React, { useState } from 'react'

import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import { SiNextdotjs, SiReact, SiSass, SiNodedotjs } from 'react-icons/si'

import Image from 'next/image'
import next from '../assets/svg/next.svg'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Tech = () => {

  const [value, setValue] = useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <section className="tech">
        <div className="content">
            <div className="title">
                <h1>TECNOLOGIAS QUE <br /> UTILIZAMOS EM NOSSOS SITES</h1>
                <div className="line"></div>
            </div>
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: '#4F5F67' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab className='tabs' label={[<SiNextdotjs key="1"/>, "Next.js"]} {...a11yProps(0)} />
                  <Tab className='tabs' label={[<SiReact key="2"/>, "React.js"]} {...a11yProps(1)} />
                  <Tab className='tabs' label={[<SiSass key="3"/>, "Sass"]} {...a11yProps(2)} />
                  <Tab className='tabs' label={[<SiNodedotjs key="4"/>, "Node.js"]} {...a11yProps(3)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <div className="tab-content">
                  <div className="left">
                    <h1>NEXT.JS</h1>
                    <p>O Next.js oferece a melhor experiência de desenvolvimento com todos os recursos necessários para produção: renderização híbrida estática e de servidor, suporte a TypeScript, agrupamento inteligente, pré-busca de rota e muito mais.</p>
                    <button>Saiba mais</button>
                  </div>
                  <div className="right">
                    <div className="code-wrapper">
                      <div className="code-circle">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                      </div>
                      <div className="code-typing">
                        <img src="https://raw.githubusercontent.com/serverless-nextjs/serverless-next.js/master/img/logo.gif" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <div className="tab-content">
                  <div className="left">
                    <h1>REACT.JS</h1>
                    <p>React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam.</p>
                    <button>Saiba mais</button>
                  </div>
                  <div className="right">
                    <div className="code-wrapper">
                      <div className="code-circle">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                      </div>
                      <div className="code-typing">
                        <img src="https://thumbs.gfycat.com/BestMeagerHoki-size_restricted.gif" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <div className="tab-content">
                  <div className="left">
                    <h1>SASS</h1>
                    <p>O Sass possui mais recursos e habilidades do que qualquer outra linguagem de extensão CSS existente. O Sass Core Team trabalhou incansavelmente não apenas para acompanhar, mas também para ficar à frente.</p>
                    <button>Saiba mais</button>
                  </div>
                  <div className="right">
                    <div className="code-wrapper">
                      <div className="code-circle">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                      </div>
                      <div className="code-typing">
                        <img src="https://miro.medium.com/max/683/1*F9QwZsjxEcwZRD0CaKTBEQ.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <div className="tab-content">
                  <div className="left">
                    <h1>NODE.JS</h1>
                    <p>Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.</p>
                    <button>Saiba mais</button>
                  </div>
                  <div className="right">
                    <div className="code-wrapper">
                      <div className="code-circle">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                      </div>
                      <div className="code-typing">
                        <img src="https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1608020490393-RBHFYWZAECA6UCJMX7FK/Integrate+CI+CD.gif?format=1000w" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Box>
        </div>
    </section>
  )
}

export default Tech