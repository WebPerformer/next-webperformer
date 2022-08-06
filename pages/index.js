import React from 'react'

import Banner from '../sections/Banner'
import Contact from '../sections/Contact'
import GoWild from '../sections/GoWild'
import Personal from '../sections/Personal'
import SEO from '../sections/SEO'
import Tech from '../sections/Tech'
import Why from '../sections/Why'

const index = () => {
  return (
    <>
      <Banner/>
      <GoWild/>
      <SEO/>
      <Tech/>
      <Why/>
      <Personal/>
      <Contact/>
    </>
  )
}

export default index