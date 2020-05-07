import React, { useEffect, useState } from 'react'
import { StyledAdmin, Form, Input, Logo, Button } from './styled'
import { useHistory } from 'react-router-dom'
import Select from '../../components/select'

const Admin = () => {
  const history = useHistory()
  useEffect(() => {
    const token = localStorage.getItem('tokenAmaralSolutionsAdmin')
    token && history.push('/admin/login')
  }, [])
  const types = [{ name: 'Front-End' }, { name: 'Back-End' }, { name: 'Full-Stack' }]
  const [selectType, setSelectType] = useState({})
  return (
    <StyledAdmin>
      <Form big>
        <Input placeholder="Nome e Sobrenome" />
        <Select
          width="95%"
          array={types}
          placeholder="Selecione sua area"
          selected={selectType}
          setSelected={setSelectType}
        />
        <Input placeholder="URL da foto" />
      </Form>
    </StyledAdmin>
  )
}

export default Admin
