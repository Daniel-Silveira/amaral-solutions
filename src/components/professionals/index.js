import React, { useEffect, useState } from 'react'
import { ListProfessionals, BoxProfessional, Photo, StyledButton } from './styled'
import DefaultText from '../shared/text'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { listPerfil } from '../../redux/perfil'

const Professionals = ({ children }) => {
  const [array, setArray] = useState([])
  const history = useHistory()
  const dispatch = useDispatch()
  const {
    perfil: { list },
  } = useSelector(value => value)

  useEffect(() => {
    dispatch(listPerfil())
  }, [])

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
            <Link to={`/professionals/${i.path}`} target="_blank">
              <StyledButton text="Ver perfil" />
            </Link>
          </BoxProfessional>
        ))}
      </ListProfessionals>
    </>
  ) : null
}

export default Professionals
