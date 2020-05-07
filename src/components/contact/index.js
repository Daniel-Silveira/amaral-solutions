import React, { useState, useEffect } from 'react'
import {
  StyledContact,
  StyledForm,
  StyledGroup,
  GroupButton,
  StyledMessage,
  StyledAnimation,
} from './styled'
import Input from '../shared/input'
import Button from '../shared/button'
import { StyledTitle } from '../about/styled'
import { Element } from 'react-scroll'
import { sendEmail } from '../../utils'
import Loading from '../loading'
import Lottie from 'react-lottie'
import foguete from './foguete.json'

const Contact = () => {
  const schema = {
    name: '',
    email: '',
    phone: '',
    whats: '',
    description: '',
  }
  const [info, setInfo] = useState(schema)
  const [error, setError] = useState(false)
  const [response, setResponse] = useState()
  const [message, setMessage] = useState()

  const defaultOptions = name => ({
    loop: true,
    autoplay: true,
    animationData: name,
  })

  const verification = () => {
    const send = () => {
      setResponse('await')
      sendEmail(info, setResponse)
    }
    info.name && info.email ? send() : setError(true)
  }

  useEffect(() => {
    response === 'await'
      ? setMessage('Enviando')
      : response === 'send'
      ? setMessage('Mensagem enviada com sucesso.')
      : response === 'error' && setMessage('Mensagem não enviada, tente novamente.')
    response === 'send' && setInfo(schema)
    response === 'send' &&
      setTimeout(() => {
        setMessage('')
      }, 5000)
  }, [response])

  return (
    <div style={{ marginTop: '10%' }}>
      <Element name="Contato" style={{ height: '100vh' }}>
        <StyledTitle color="#f9b253" type="subtitle" text="Entre em contato com a gente" center />
        <StyledContact>
          <StyledForm onSubmit={e => e.preventDefault()}>
            <Input
              placeholder={error ? 'Campo de Nome obrigatório' : 'Nome *'}
              value={info.name}
              onChange={e => setInfo({ ...info, name: e.target.value })}
              error={error && !info.name}
            />
            <Input
              placeholder={error ? 'Campo de E-mail obrigatório' : 'E-mail *'}
              keyboardType={'email'}
              value={info.email}
              onChange={e => setInfo({ ...info, email: e.target.value })}
              error={error && !info.email}
              type="text"
            />
            <StyledGroup>
              <Input
                placeholder="Telefone"
                keyboardType={'numeric'}
                value={info.phone}
                onChange={e => setInfo({ ...info, phone: e.target.value })}
                // error={error && !info.phone}
                type="tel"
              />
              <Input
                placeholder="WhatsApp"
                value={info.whats}
                onChange={e => setInfo({ ...info, whats: e.target.value })}
                type="tel"
              />
            </StyledGroup>
            <Input
              textArea
              placeholder="Descrição"
              value={info.description}
              onChange={e => setInfo({ ...info, description: e.target.value })}
            />
            <GroupButton>
              <StyledMessage>
                <p style={{ color: response === 'error' && 'red' }}>{message}</p>
                {response === 'await' && <Loading />}
              </StyledMessage>
              <Button style={{ color: '#f9b253' }} text="Enviar" onClick={verification} />
            </GroupButton>
          </StyledForm>
          <StyledAnimation>
            <Lottie options={defaultOptions(foguete)} />
          </StyledAnimation>
        </StyledContact>
      </Element>
    </div>
  )
}

export default Contact
