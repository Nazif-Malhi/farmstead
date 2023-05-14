import axios from "axios";
import {
  CROP_BUDGET_REQUEST,
  CROP_BUDGET_SUCCESS,
  CROP_BUDGET_FAIL,
  CROP_BUDGET_CLEAR_ERRORS,
} from "../constants/crop_budget_constants";

// add
export const get_crop_budget = () => async (dispatch) => {
  try {
    dispatch({
      type: CROP_BUDGET_REQUEST,
    });
    const crop_budget = await axios.get(
      `${process.env.REACT_APP_API_URL}/crop-budget-estimator/get-crops-budget-for-farmers/`
    );
    dispatch({
      type: CROP_BUDGET_SUCCESS,
      payload: crop_budget,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: CROP_BUDGET_FAIL,
      payload: error.response.data,
    });
  }
};
export const crop_budget_clearErrors = () => async (dispatch) => {
  dispatch({
    type: CROP_BUDGET_CLEAR_ERRORS,
  });
};
