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

export const crop_budget_details_reducer = (
  state = {
    crop_budget: [],
  },
  action
) => {
  switch (action.type) {
    case CROP_BUDGET_REQUEST:
      return {
        loading: true,
        crop_budget: [],
      };
    case CROP_BUDGET_SUCCESS:
      return {
        loading: false,
        crop_budget: action.payload.data,
      };
    case CROP_BUDGET_FAIL:
      return {
        loading: false,
        crop_budget: null,
        crop_budget_error: action.payload,
      };

    case CROP_BUDGET_CLEAR_ERRORS:
      return {
        ...state,
        crop_budget_error: null,
      };
    default:
      return state;
  }
};

export const crop_budget_reducer = (
  state = {
    ac_crop_budget: [],
  },
  action
) => {
  switch (action.type) {
    case AC_CROP_BUDGET_REQUEST:
      return {
        ac_loading: true,
        ac_crop_budget: [],
      };
    case AC_CROP_BUDGET_SUCCESS:
      return {
        ac_loading: false,
        ac_crop_budget: action.payload.data,
      };
    case AC_CROP_BUDGET_FAIL:
      return {
        ac_loading: false,
        ac_crop_budget: null,
        ac_crop_budget_error: action.payload,
      };

    case AC_CROP_BUDGET_CLEAR_ERRORS:
      return {
        ...state,
        ac_crop_budget_error: null,
      };
    default:
      return state;
  }
};
