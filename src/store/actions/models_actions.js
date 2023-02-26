import axios from "axios";

import {
  SIMPLE_CROP_REQUEST,
  SIMPLE_CROP_SUCCESS,
  SIMPLE_CROP_FAIL,
  SIMPLE_CROP_CLEAR_ERRORS,
} from "../constants/models_constants.js";

export const get_simple_crop = (data_payload) => async (dispatch) => {
  try {
    dispatch({
      type: SIMPLE_CROP_REQUEST,
    });

    const simple_crop = await axios.post(
      `${process.env.REACT_APP_API_URL}/models/simple-crop-prediction/`,
      data_payload
    );
    console.log(simple_crop);
    dispatch({
      type: SIMPLE_CROP_SUCCESS,
      payload: simple_crop.data,
    });
  } catch (error) {
    dispatch({
      type: SIMPLE_CROP_FAIL,
      payload: error.response.data,
    });
  }
};
export const simple_crop_clear_errors = () => async (dispatch) => {
  dispatch({
    type: SIMPLE_CROP_CLEAR_ERRORS,
  });
};
