import React from 'react'
import { StyledFinanciamento } from './styled'
import Header from './components/header'
import Navbar from './components/navbar'

const Financiamento = () => {
    return (
        <StyledFinanciamento>
            <Navbar/>
            <Header/>
        </StyledFinanciamento>
    )  
}

export default Financiamento