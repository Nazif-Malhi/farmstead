import axios from "axios";

import {
  SIMPLE_CROP_REQUEST,
  SIMPLE_CROP_SUCCESS,
  SIMPLE_CROP_FAIL,
  SIMPLE_CROP_CLEAR_ERRORS,
  //
  ADVANCE_CROP_REQUEST,
  ADVANCE_CROP_SUCCESS,
  ADVANCE_CROP_FAIL,
  ADVANCE_CROP_CLEAR_ERRORS,
  //
  FERTILIZER_REQUEST,
  FERTILIZER_SUCCESS,
  FERTILIZER_FAIL,
  FERTILIZER_CLEAR_ERRORS,
  //
  PEST_REQUEST,
  PEST_SUCCESS,
  PEST_FAIL,
  PEST_CLEAR_ERRORS,
  //
  CROP_DISEASE_REQUEST,
  CROP_DISEASE_SUCCESS,
  CROP_DISEASE_FAIL,
  CROP_DISEASE_CLEAR_ERRORS,
} from "../constants/models_constants.js";

// Get Simple Crop

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

// Get Advance crop
export const get_advance_crop = (data_payload) => async (dispatch) => {
  try {
    dispatch({
      type: ADVANCE_CROP_REQUEST,
    });

    const advance_crop = await axios.post(
      `${process.env.REACT_APP_API_URL}/models/advance-crop-prediction/`,
      data_payload
    );
    dispatch({
      type: ADVANCE_CROP_SUCCESS,
      payload: advance_crop.data,
    });
  } catch (error) {
    dispatch({
      type: ADVANCE_CROP_FAIL,
      payload: error.response.data,
    });
  }
};
export const advance_crop_clear_errors = () => async (dispatch) => {
  dispatch({
    type: ADVANCE_CROP_CLEAR_ERRORS,
  });
};

// Get Fertilizer
export const get_fertilizer = (data_payload) => async (dispatch) => {
  try {
    dispatch({
      type: FERTILIZER_REQUEST,
    });

    const fertilizer = await axios.post(
      `${process.env.REACT_APP_API_URL}/models/fertilizer-prediction/`,
      data_payload
    );
    dispatch({
      type: FERTILIZER_SUCCESS,
      payload: fertilizer.data,
    });
  } catch (error) {
    dispatch({
      type: FERTILIZER_FAIL,
      payload: error.response.data,
    });
  }
};
export const fertilizer_clear_errors = () => async (dispatch) => {
  dispatch({
    type: FERTILIZER_CLEAR_ERRORS,
  });
};

// Get Pest Detection
export const get_pest = (data_payload) => async (dispatch) => {
  var formData = new FormData();
  formData.append("upload", data_payload);
  try {
    dispatch({
      type: PEST_REQUEST,
    });

    const pest = await axios.post(
      `${process.env.REACT_APP_API_URL}/models/pest-detection/`,
      formData
    );
    dispatch({
      type: PEST_SUCCESS,
      payload: pest.data,
    });
  } catch (error) {
    dispatch({
      type: PEST_FAIL,
      payload: error.response.data,
    });
  }
};
export const pest_clear_errors = () => async (dispatch) => {
  dispatch({
    type: PEST_CLEAR_ERRORS,
  });
};

// Get Crop Disease Detection
export const get_crop_disease = (data_payload) => async (dispatch) => {
  var formData = new FormData();
  formData.append("upload", data_payload);
  try {
    dispatch({
      type: CROP_DISEASE_REQUEST,
    });

    const crop_disease = await axios.post(
      `${process.env.REACT_APP_API_URL}/models/crop-disease-detection/`,
      formData
    );
    dispatch({
      type: CROP_DISEASE_SUCCESS,
      payload: crop_disease.data,
    });
  } catch (error) {
    dispatch({
      type: CROP_DISEASE_FAIL,
      payload: error.response.data,
    });
  }
};
export const crop_disease_clear_errors = () => async (dispatch) => {
  dispatch({
    type: CROP_DISEASE_CLEAR_ERRORS,
  });
};
