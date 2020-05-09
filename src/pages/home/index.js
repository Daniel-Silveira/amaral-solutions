import React, { useLayoutEffect, useState } from 'react'
import { StyledHome } from './styled'
import Header from '../../components/header'
import Services from '../../components/services'
import About from '../../components/about'
import Contact from '../../components/contact'
import Navbar from '../../components/navbar'
import Professionals from '../../components/professionals'

const Home = () => {
  const [scroll, setScroll] = useState('')

  return (
    <StyledHome>
      <Navbar scroll={scroll} />
      <Header />
      <Services scroll={scroll} />
      <About />
      <Contact />
    </StyledHome>
  )
}

export default Home
