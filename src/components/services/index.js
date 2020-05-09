import React, { useState, useEffect } from 'react'
import { StyledServices, StyledBox, StyledImage, StyledText, StyledElement } from './styled'
import DefaultText from '../shared/text'

const Services = ({ scroll }) => {
  const data = [
    {
      url: require('../../assets/img/code.svg'),
      title: 'Sites e Sistemas Web',
      description:
        'Desenvolvimento de sites e sistemas web personalizados de acordo com a necessidade do seu negócio',
    },
    {
      url: require('../../assets/img/app.svg'),
      title: 'Aplicativos',
      description:
        'Desenvolvimento de aplicativos totalmente planejado para o seu negócio nas plataformas Android e IOS',
    },
    {
      url: require('../../assets/img/ux.svg'),
      title: 'Layout',
      description:
        'Criação do seu layout com uma equipe especializada para atender da melhor forma a ideia do seu negócio',
    },
    {
      url: require('../../assets/img/nuvem.svg'),
      title: 'Hospedagem e Domínio',
      description: 'Registramos e configuramos domínios e hospedagem de acordo com sua necessidade',
    },
  ]
  return (
    <StyledElement name="Serviços">
      <div>
        <StyledText color="#f9b253" type="subtitle" text="Trabalhamos com" center />
      </div>
      <StyledServices>
        {data.map(i => (
          <StyledBox>
            <StyledImage>
              <img src={i.url} />
            </StyledImage>
            <DefaultText color="#fff" type="titleCard" text={i.title} />
            <DefaultText color="#fff" text={i.description} />
          </StyledBox>
        ))}
      </StyledServices>
    </StyledElement>
  )
}

export default Services
