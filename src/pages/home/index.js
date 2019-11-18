import React from 'react'
import { StyledHome } from './styled'
import Header from '../../components/header'
import Services from '../../components/services'
import About from '../../components/about'
import Contact from '../../components/contact'
import Navbar from '../../components/navbar'

const Home = () => {
    return (
        <StyledHome>
            <Navbar/>
            <Header/>
            <Services/>
            <About/>
            <Contact/>
        </StyledHome>
    )
}

export default Home