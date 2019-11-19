import React from 'react'
import { StyledHeader } from './styled'
import Simulator from '../simulator'

const Header = () => {
    return (
        <StyledHeader>
            <div></div>
            <Simulator/>
        </StyledHeader>
    )
}

export default Header