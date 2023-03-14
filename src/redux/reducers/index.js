import { combineReducers } from "redux";
import loginreducer from "./loginreducer";
import handlingCart from "./handlingcart";

const rootReducers = combineReducers({
  handlingCart,
  loginreducer,
});

export default rootReducers;
