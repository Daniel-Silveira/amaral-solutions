import React from 'react'
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

const defaultOptions = name => ({
  loop: true,
  autoplay: true,
  animationData: name,
})

const PerfilProfessional = ({ professional }) => (
  <StyledProfessional>
    <Background />
    <Logo>
      <img src={require('../../assets/img/logo.svg')} />
    </Logo>
    {professional.name ? (
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
                <Box>
                  <Header>
                    <p>{i.type}</p>
                  </Header>
                  {i.skill.map(
                    item =>
                      item.name &&
                      item.nivel && (
                        <Skill>
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
    ) : (
      <Loading>
        <Lottie options={defaultOptions(loading)} />
      </Loading>
    )}
  </StyledProfessional>
)

export default PerfilProfessional
