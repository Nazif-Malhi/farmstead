import axios from "axios";
import {
  CROP_BUDGET_REQUEST,
  CROP_BUDGET_SUCCESS,
  CROP_BUDGET_FAIL,
  CROP_BUDGET_CLEAR_ERRORS,
  AC_CROP_BUDGET_REQUEST,
  AC_CROP_BUDGET_SUCCESS,
  AC_CROP_BUDGET_FAIL,
  AC_CROP_BUDGET_CLEAR_ERRORS,
} from "../constants/crop_budget_constants";

// get
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
export const cud_crop_budget = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: AC_CROP_BUDGET_REQUEST,
    });
    const crop_budget = await axios.post(
      `${process.env.REACT_APP_API_URL}/crop-budget-estimator/add-crops-budget-for-farmers/`,
      payload
    );
    dispatch({
      type: AC_CROP_BUDGET_SUCCESS,
      payload: crop_budget,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: AC_CROP_BUDGET_FAIL,
      payload: error.response.data,
    });
  }
};
export const cud_crop_budget_clearErrors = () => async (dispatch) => {
  dispatch({
    type: AC_CROP_BUDGET_CLEAR_ERRORS,
  });
};
