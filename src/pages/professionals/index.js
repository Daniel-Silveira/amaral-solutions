import React from 'react'
import PerfilProfessional from '../../components/perfil-professional'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Professionals = () => {
  const array = [
    {
      name: 'Daniel Silveira',
      role: 'Front-End',
      photo:
        'https://media-exp1.licdn.com/dms/image/C4E03AQG95cKSs61nsQ/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=DVaRXx26S08ikYp0p9UFKBxj52JzX4OBlxoz-5QyqV0',
      skills: [
        {
          type: 'Front-End',
          skill: [
            { name: 'HTML', nivel: 5 },
            { name: 'CSS', nivel: 5 },
            { name: 'ReactJS', nivel: 5 },
          ],
        },
        {
          type: 'Back-End',
          skill: [
            { name: 'NodeJS', nivel: 4 },
            { name: 'MongoDB', nivel: 3 },
          ],
        },
        {
          type: 'Outros',
          skill: [
            { name: 'UI/UX', nivel: 4 },
            { name: 'Teste Automatizados', nivel: 2 },
          ],
        },
      ],
    },
  ]
  return (
    <Router>
      {array.map(i => (
        <Route path={`/professionals/${i.name.replace(' ', '-').toLocaleLowerCase()}`}>
          <PerfilProfessional professional={i} />
        </Route>
      ))}
    </Router>
  )
}

export default Professionals
