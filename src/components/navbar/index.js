import React, { useState, useLayoutEffect } from 'react'
import {
  StyledNavbar,
  StyledLogo,
  StyledMenu,
  StyledMobile,
  StyledMenuMobile,
  Mobile,
  Toogle,
  StyledLogoMobile,
  StyledGroup,
} from './styled'
import { Link } from 'react-scroll'
import DefaultText from '../shared/text'
import Overlay from '../overlay'

const Navbar = ({ scroll }) => {
  const data = ['Inicio', 'Serviços', 'Sobre', 'Contato']
  const [selected, setSelected] = useState('Inicio')
  const [open, setOpen] = useState(false)

  return (
    <StyledNavbar scroll={!open && scroll > 180}>
      <StyledLogo scroll={!open && scroll > 180}>
        <img src={require('../../assets/img/logo.svg')} />
      </StyledLogo>
      <Mobile />
      <StyledMenu>
        {data.map(i => (
          <Link key={i} activeClass="active" to={i} spy={true} smooth={true} duration={1000}>
            <DefaultText
              color={selected === i ? '#f9b253' : '#fff'}
              onClick={() => setSelected(i)}
              type="titleCard"
              text={i}
              pointer
            />
          </Link>
        ))}
      </StyledMenu>
      <StyledMobile>
        <StyledMenuMobile onClick={() => setOpen(true)}>
          <img src={require('../../assets/img/menu.svg')} />
        </StyledMenuMobile>
      </StyledMobile>
      <Toogle open={open}>
        <StyledLogoMobile>
          <img src={require('../../assets/img/logo.svg')} />
        </StyledLogoMobile>

        <StyledGroup>
          {data.map(i => (
            <Link key={i} activeClass="active" to={i} spy={true} smooth={true} duration={1000}>
              <DefaultText
                color={selected === i ? '#f9b253' : '#fff'}
                onClick={() => {
                  setOpen(false)
                  setSelected(i)
                }}
                type="titleCard"
                style={{ fontSize: '1.5em', margin: '1em 0' }}
                text={i}
                pointer
              />
            </Link>
          ))}
        </StyledGroup>
      </Toogle>
      <Overlay open={open} setOpen={setOpen} />
    </StyledNavbar>
  )
}

export default Navbar
