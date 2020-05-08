import React, { useEffect, useState } from 'react'
import {
  StyledAdmin,
  Form,
  Input,
  Logo,
  Skill,
  Header,
  Skills,
  AddBox,
  Box,
  Container,
  Line,
  Group,
  Button,
  BoxButton,
} from './styled'
import { useHistory } from 'react-router-dom'
import Select from '../../components/select'
import { FaPlus, FaTrashAlt } from 'react-icons/fa'
import Stars from '../../components/perfil-professional/stars'
import { useDispatch, useSelector } from 'react-redux'
import { requestPerfil, getPerfil, editPerfil } from '../../redux/perfil'

const Admin = () => {
  const history = useHistory()
  const types = [{ name: 'Front-End' }, { name: 'Back-End' }, { name: 'Full-Stack' }]

  const userId = localStorage.getItem('userAmaralSolutionsAdmin')

  const [info, setInfo] = useState({
    name: '',
    role: '',
    photo: '',
    skills: [
      {
        type: 'Front-End',
        skill: [],
      },
      {
        type: 'Back-End',
        skill: [],
      },
      {
        type: 'Outros',
        skill: [],
      },
    ],
  })
  const dispatch = useDispatch()
  const [skill, setSkill] = useState({ name: '', nivel: '' })
  const [remove, setRemove] = useState(false)
  const {
    perfil: { perfil },
  } = useSelector(value => value)

  useEffect(() => {
    const token = localStorage.getItem('tokenAmaralSolutionsAdmin')
    !token && history.push('/admin/login')
  }, [])

  useEffect(() => {
    dispatch(getPerfil(JSON.parse(userId)._id))
  }, [])

  console.log(info)

  useEffect(() => {
    perfil && !!perfil.name && setInfo(perfil)
  }, [perfil])

  return (
    <StyledAdmin>
      <Form big>
        <div>
          <Header>
            <Input
              value={info.name}
              onChange={e => setInfo({ ...info, name: e.target.value })}
              margin
              placeholder="Nome e Sobrenome"
            />
            <Input
              value={info.photo}
              onChange={e => setInfo({ ...info, photo: e.target.value })}
              margin
              placeholder="URL da foto"
            />
          </Header>
          <Select
            width="48%"
            array={types}
            placeholder="Selecione sua area"
            selected={info}
            setSelected={setInfo}
          />
        </div>
        <Line />
        <Skills>
          {info.skills.map(i => (
            <Container key={i.type}>
              <h2>{i.type}</h2>
              <AddBox>
                <Input
                  onChange={e => setSkill({ ...skill, name: e.target.value })}
                  placeholder="Linguagem"
                />
                <Input
                  onChange={e => setSkill({ ...skill, nivel: e.target.value })}
                  style={{ width: '8em', textAlign: 'center', marginLeft: '1em' }}
                  placeholder="Nivel"
                  value={skill.value}
                  type="number"
                  min="1"
                  max="5"
                />
                <FaPlus
                  color="#fff"
                  onClick={() => {
                    if (skill.name && skill.nivel && skill.nivel <= 5 && skill.nivel > 0) {
                      i.skill.push(skill)
                      setSkill({ name: '', nivel: '' })
                    }
                  }}
                />
              </AddBox>
              <Box>
                {i.skill.map(
                  item =>
                    item && (
                      <Skill
                        key={item.name}
                        onMouseEnter={() => setRemove(`${i.type}/${item.name}`)}
                        onMouseLeave={() => setRemove(false)}
                      >
                        <p>{item.name}</p>
                        <Group>
                          <Stars amount={item.nivel} />
                          {remove === `${i.type}/${item.name}` && (
                            <FaTrashAlt
                              style={{ cursor: 'pointer', marginLeft: '1em' }}
                              color="red"
                              onClick={() => {
                                const att = {
                                  ...i,
                                  skill: i.skill.map(f => f.name !== item.name && f),
                                }
                                setInfo({
                                  ...info,
                                  skills: info.skills.map(t => (t.type !== i.type ? t : att)),
                                })
                              }}
                            />
                          )}
                        </Group>
                      </Skill>
                    )
                )}
              </Box>
            </Container>
          ))}
        </Skills>
        <BoxButton>
          <Button
            onClick={() => {
              console.log(perfil)
              if (!!perfil && !!perfil.createdAt) {
                dispatch(editPerfil(info))
              } else {
                dispatch(requestPerfil({ ...info, owner: JSON.parse(userId)._id }))
              }
            }}
          >
            Salvar
          </Button>
        </BoxButton>
      </Form>
    </StyledAdmin>
  )
}

export default Admin
