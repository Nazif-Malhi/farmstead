import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  advance_crop_reducer,
  change_pass_reducer,
  simple_crop_reducer,
  update_user_reducer,
  fertilizer_reducer,
  pest_reducer,
  crop_disease_reducer,
  crop_budget_details_reducer,
  test_reducer,
  all_test_reducer,
  crop_budget_reducer,
} from "./reducers";
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
  update_user: update_user_reducer,
  //Models
  simple_crop: simple_crop_reducer,
  advance_crop: advance_crop_reducer,
  fertilizer: fertilizer_reducer,
  pest: pest_reducer,
  crop_disease: crop_disease_reducer,
  // budget
  crop_budget: crop_budget_details_reducer,
  ac_crop_budget: crop_budget_reducer,
  //test
  test: test_reducer,
  all_test: all_test_reducer,
});
let initialState = {};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
