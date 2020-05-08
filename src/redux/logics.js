import configureUserLogics from './user/logic'
import configurePerfilLogics from './perfil/logic'

const userLogics = configureUserLogics()
const perfilLogics = configurePerfilLogics()

const logics = [...userLogics, ...perfilLogics]

export default logics
