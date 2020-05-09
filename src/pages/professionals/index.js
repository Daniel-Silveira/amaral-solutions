import React, { useState, useEffect } from 'react'
import PerfilProfessional from '../../components/perfil-professional'
import { listPerfil } from '../../redux/perfil'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import {
  Background,
  Logo,
  StyledProfessional,
  Loading,
} from '../../components/perfil-professional/styled'
import Lottie from 'react-lottie'
import loading from '../../components/perfil-professional/loading.json'

const Professionals = () => {
  const { name } = useParams()
  const [array, setArray] = useState([])
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


  const defaultOptions = name => ({
    loop: true,
    autoplay: true,
    animationData: name,
  })

  return (
    <StyledProfessional>
      <Background />
      <Logo>
        <img src={require('../../assets/img/logo.svg')} />
      </Logo>{' '}
      {array.length > 0 ? (
        <PerfilProfessional professional={array.find(i => i.path === name)} />
      ) : (
        <Loading>
          <Lottie options={defaultOptions(loading)} />
        </Loading>
      )}
    </StyledProfessional>
  )
}

export default Professionals
