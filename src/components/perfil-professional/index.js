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
} from './styled'
import Stars from './stars'

const PerfilProfessional = ({ professional }) => (
  <StyledProfessional>
    <Background />
    <Logo>
      <img src={require('../../assets/img/logo.svg')} />
    </Logo>
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
        {professional.skills.map(i => (
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
  </StyledProfessional>
)

export default PerfilProfessional
