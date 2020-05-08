import { combineReducers } from "redux";
import user from "./user";
import perfil from "./perfil";

const rootReducer = combineReducers({
  user,
  perfil
});

export default rootReducer;
