import React, { useEffect, useState } from 'react'
import { StyledAdmin, Form, Input, Logo, Button, Register } from './styled'
import { useHistory } from 'react-router-dom'
import { requestAccess, requestRegister } from '../../redux/user'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { user } = useSelector(user => user)
  const [register, setRegister] = useState(false)
  useEffect(() => {
    const token = localStorage.getItem('tokenAmaralSolutionsAdmin')
    token && history.push('/admin')
  }, [])
  useEffect(() => {
    !!user.value._id && history.push('/admin')
  }, [user])
  const [credentials, setCredentials] = useState({ email: '', password: '', code: '' })
  return (
    <StyledAdmin>
      <Logo>
        <img src={require('../../assets/img/logo.svg')} />
      </Logo>
      <Form>
        <Input
          value={credentials.email}
          onChange={e => setCredentials({ ...credentials, email: e.target.value })}
          placeholder="E-mail"
        />
        <Input
          value={credentials.password}
          onChange={e => setCredentials({ ...credentials, password: e.target.value })}
          placeholder="Senha"
          type="password"
        />
        {register && (
          <Input
            value={credentials.code}
            onChange={e => setCredentials({ ...credentials, code: e.target.value })}
            placeholder="Codigo de convite"
          />
        )}
        <Button onClick={() => register ? dispatch(requestRegister(credentials)) : dispatch(requestAccess(credentials))}>{register ? 'Cadastrar' : 'Entrar'}</Button>
        <Register onClick={() => setRegister(!register)}>{register ? 'Voltar' : 'Criar conta'}</Register>
      </Form>
    </StyledAdmin>
  )
}

export default Login
