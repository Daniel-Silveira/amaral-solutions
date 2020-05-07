import React from 'react'
import {
  StyledHeader,
  StyledImage,
  StyledText,
  StyledButton,
  StyledAnimation,
  StyledDrone,
} from './styled'
import DefaultText from '../shared/text'
import { Element, Link } from 'react-scroll'
import Lottie from 'react-lottie'
import teste from './lf30_editor_MBhtaj.json'
import drone from './drone.json'

const Header = () => {
  const defaultOptions = name => ({
    loop: true,
    autoplay: true,
    animationData: name,
  })
  return (
    <Element name="Inicio">
      <StyledHeader>
        <StyledText>
          <DefaultText
            text="Criamos seu site ou aplicativo do jeito que sua empresa precisa e com as melhores tecnologia do mercado para que sua empresa cresça cada vez mais."
            type="title"
            color="#fff"
          />
          <DefaultText
            text="E o melhor de tudo isso é que garatimos o melhor preço do mercado."
            type="titleCard"
            color="#f9b253"
          />
          <Link
            style={{ zIndex: '999' }}
            activeClass="active"
            to="Contato"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <StyledButton text="Fazer orçamento" />
          </Link>
        </StyledText>
        <StyledAnimation>
          <Lottie options={defaultOptions(teste)} />
        </StyledAnimation>
        <StyledDrone>
          <Lottie options={defaultOptions(drone)} />
        </StyledDrone>
      </StyledHeader>
    </Element>
  )
}

export default Header
