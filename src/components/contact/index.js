import React, { useState, useEffect } from 'react'
import {
  StyledContact,
  StyledForm,
  StyledGroup,
  GroupButton,
  StyledMessage,
  StyledAnimation,
  BoxContact,
  StyledWhats,
} from './styled'
import Input from '../shared/input'
import Button from '../shared/button'
import { StyledTitle } from '../about/styled'
import { Element } from 'react-scroll'
import { sendEmail } from '../../utils'
import Loading from '../loading'
import Lottie from 'react-lottie'
import foguete from './foguete.json'
import DefaultText from '../shared/text'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const schema = {
    name: '',
    email: '',
    phone: '',
    whats: '',
  }
  const [info, setInfo] = useState(schema)
  const [error, setError] = useState(false)
  const [response, setResponse] = useState()
  const [message, setMessage] = useState()
  const [active, setActive] = useState(false)

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
    if (response === 'await') {
      setMessage('Enviando')
    } else if (response === 'error') {
      setMessage('Mensagem não enviada, tente novamente.')
    }
    if (response === 'send') {
      setMessage('Mensagem enviada com sucesso.')
      setActive(true)
      setInfo(schema)
      setTimeout(() => {
        setMessage('')
      }, 5000)
    }
  }, [response])

  return (
    <div style={{ marginTop: '10%' }}>
      <Element name="Contato" style={{ height: '100vh' }}>
        <StyledContact>
          <StyledTitle color="#f9b253" type="subtitle" text="Entre em contato com a gente" center />
          <div style={{ marginTop: '15vh', zIndex: '999' }}>
            <BoxContact>
              <div>
                <FaEnvelope color="#fff" />
                <DefaultText color="#fff" text="atendimento@amaralsolutions.com.br" />
              </div>
              <StyledWhats
                href="https://wa.me/5511959247678?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20seus%20servi%C3%A7os"
                target="_blank"
              >
                <FaWhatsapp color="#fff" size="1.5em" />
                <p>WhatsApp</p>
              </StyledWhats>
            </BoxContact>
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

              <GroupButton>
                <StyledMessage status={response}>
                  <p>{message}</p>
                  {response === 'await' && <Loading />}
                </StyledMessage>
                <Button style={{ color: '#f9b253' }} text="Enviar" onClick={verification} />
              </GroupButton>
            </StyledForm>
          </div>
          <StyledAnimation active={active}>
            <Lottie options={defaultOptions(foguete)} />
          </StyledAnimation>
        </StyledContact>
      </Element>
    </div>
  )
}

export default Contact
