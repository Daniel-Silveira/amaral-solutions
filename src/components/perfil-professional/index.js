import React, { useState, useEffect } from 'react'
import {
  StyledProfessional,
  Logo,
  Perfil,
  Photo,
  Line,
  ContainerSkills,
  Box,
  Wrapper,
  Header,
  Skill,
  Background,
  Loading,
} from './styled'
import Stars from './stars'
import loading from './loading.json'
import Lottie from 'react-lottie'

const PerfilProfessional = ({ professional }) => {
  return !!professional && professional.name ? (
    <>
      <Perfil>
        <Photo>
          <img src={professional.photo} />
        </Photo>
        <h1>{professional.name}</h1>
        <h2>{professional.role}</h2>
        <Line />
      </Perfil>
      <ContainerSkills>
        <h2>Habilidades</h2>
        <Wrapper>
          {!!professional &&
            professional.skills &&
            professional.skills.map(i => (
              <Box key={i.type}>
                <Header>
                  <p>{i.type}</p>
                </Header>
                {i.skill.map(
                  item =>
                    item.name &&
                    item.nivel && (
                      <Skill key={item.name}>
                        <p>{item.name}</p>
                        <Stars amount={item.nivel} />
                      </Skill>
                    )
                )}
              </Box>
            ))}
        </Wrapper>
      </ContainerSkills>
    </>
  ) : null
}

export default PerfilProfessional
