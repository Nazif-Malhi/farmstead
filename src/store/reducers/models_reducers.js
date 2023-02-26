import {
  SIMPLE_CROP_REQUEST,
  SIMPLE_CROP_SUCCESS,
  SIMPLE_CROP_FAIL,
  SIMPLE_CROP_CLEAR_ERRORS,
} from "../constants/models_constants.js";

export const simple_crop_reducer = (
  state = {
    simple_crop: [],
    simple_crop_error: null,
  },
  action
) => {
  console.log(action);
  switch (action.type) {
    case SIMPLE_CROP_REQUEST:
      return {
        loading: true,
        simple_crop: [],
      };
    case SIMPLE_CROP_SUCCESS:
      return {
        loading: false,
        simple_crop: action.payload,
      };
    case SIMPLE_CROP_FAIL:
      return {
        loading: false,
        simple_crop_error: action.payload,
      };
    case SIMPLE_CROP_CLEAR_ERRORS:
      return {
        ...state,
        simple_crop_error: null,
      };
    default:
      return state;
  }
};
