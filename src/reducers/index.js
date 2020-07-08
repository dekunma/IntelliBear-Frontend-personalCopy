import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import mobileDrawerReducer from './mobileDrawerReducer'
import dishReducer from './dishReducer'
import dishTypeReducer from './dishTypeReducer'
import tabReducer from './tabReducer'
import tabOpenReducer from './tabOpenReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  mobileDrawerOpen: mobileDrawerReducer,
  dish: dishReducer,
  dishType: dishTypeReducer,
  tab:tabReducer,
  tabOpen:tabOpenReducer
});
