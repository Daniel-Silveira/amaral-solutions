import React, { useEffect, useState } from 'react'
import { ListProfessionals, BoxProfessional, Photo, StyledButton, StyledLink } from './styled'
import { useSelector, useDispatch } from 'react-redux'
import { listPerfil } from '../../redux/perfil'

const Professionals = ({ children }) => {
  const [array, setArray] = useState([])
  const dispatch = useDispatch()
  const {
    perfil: { list },
  } = useSelector(value => value)

  useEffect(() => {
    dispatch(listPerfil())
  }, [])

  console.log(list, ' fadfasdfasdf')

  useEffect(() => {
    setArray(list)
  }, [list])

  return array.length > 0 ? (
    <>
      {children}
      <ListProfessionals>
        {array.map(i => (
          <BoxProfessional key={i.name}>
            <Photo>
              <img src={i.photo} />
            </Photo>
            <h4>{i.name}</h4>
            <p>{i.role}</p>
            <StyledLink to={`/professionals/${i.path}`} target="_blank">
              <StyledButton text="Ver perfil" />
            </StyledLink>
          </BoxProfessional>
        ))}
      </ListProfessionals>
    </>
  ) : null
}

export default Professionals
