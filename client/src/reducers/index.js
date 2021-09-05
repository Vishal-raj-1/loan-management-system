import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import loanReducer from "./loanreducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  loans: loanReducer,
});
