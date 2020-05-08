import React, { useState, useEffect } from 'react'
import PerfilProfessional from '../../components/perfil-professional'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { listPerfil } from '../../redux/perfil'
import { useDispatch, useSelector } from 'react-redux'

const Professionals = () => {
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

  return (
    <Router>
      {array.map(i => (
        <Route key={i.name} path={`/professionals/${i.name.replace(' ', '-').toLocaleLowerCase()}`}>
          <PerfilProfessional professional={i} />
        </Route>
      ))}
    </Router>
  )
}

export default Professionals
