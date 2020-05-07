import React, { useEffect } from 'react'
import { StyledAdmin, Form, Input, Logo, Button } from './styled'
import { useHistory } from 'react-router-dom'

const Login = () => {
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem('tokenAmaralSolutionsAdmin')
    token && history.push('/admin')
  }, [])
  return (
    <StyledAdmin>
      <Logo>
        <img src={require('../../assets/img/logo.svg')} />
      </Logo>
      <Form>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" type="password" />
        <Button>Entrar</Button>
      </Form>
    </StyledAdmin>
  )
}

export default Login
