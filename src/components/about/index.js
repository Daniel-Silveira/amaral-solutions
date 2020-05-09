import React from 'react'
import { StyledAbout, StyledImage, StyledText, StyledTitle, StyledAvatarOne } from './styled'
import DefaultText from '../shared/text'
import { Element } from 'react-scroll'
import Professionals from '../professionals'

const About = () => {
  return (
    <Element name="Sobre">
      <StyledAbout>
        <StyledImage>
          <img src={require('../../assets/img/sobre.svg')} />
        </StyledImage>

        <StyledText>
          <StyledTitle color="#f9b253" type="subtitle" text="Um pouco sobre nós.." center />
          <div>
            <DefaultText
              color="#f9b253"
              type="titleCard"
              text="Somos uma equipe de profissionais  apaixonados por tecnologia e sempre a procura de novos desafios."
            />
            <DefaultText
              color="#fff"
              text="Trabalhamos com uma equipe com treinamento especifico em testes,
            para garantir que a qualidade e funcionalidade do produto estejam de acordo com o pedido do cliente."
            />
            <DefaultText
              color="#fff"
              text="Estamos atuando no mercado desde 2017, e desde então estamos trabalhando com muita dedicação para desenvolver e  manter um bom relacionamento com os nossos clientes e sempre visando em maximizar os resultados e o retorno do investimento realizado.
Para isso contamos com uma equipe especializada no que faz e muito dedicada para sempre dar o seu melhor resultado."
            />
          </div>
          <Professionals>
            <DefaultText
              color="#f9b253"
              type="titleCard"
              text="Nossa equipe"
              center
              style={{margin: '1em 0 -3vh'}}
            />
          </Professionals>
        </StyledText>
      </StyledAbout>
    </Element>
  )
}

export default About
