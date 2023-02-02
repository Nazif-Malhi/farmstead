import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { change_pass_reducer } from "./reducers";
import {
  user_auth_reducer,
  user_data_reducer,
  user_register_reducer,
} from "./reducers";

const reducer = combineReducers({
  user_auth: user_auth_reducer,
  user_data: user_data_reducer,
  user_reg: user_register_reducer,
  reset_link: change_pass_reducer,
});
let initialState = {};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
