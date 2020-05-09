import React, { useState, useEffect } from 'react'
import PerfilProfessional from '../../components/perfil-professional'
import { listPerfil } from '../../redux/perfil'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const Professionals = () => {
  const { name } = useParams()
  const [array, setArray] = useState([])
  const [perfil, setPerfil] = useState({})
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
  
  useEffect(() => {
    array.length > 0 && setPerfil(array.find(i => i.name === name.replace('-', ' ')))
  }, [array])

  return <PerfilProfessional professional={perfil} />
}

export default Professionals
