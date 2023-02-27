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

// Simple crop recomendation
export const simple_crop_reducer = (
  state = {
    simple_crop: [],
    simple_crop_error: null,
  },
  action
) => {
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

// Advance Crop Recommendation
export const advance_crop_reducer = (
  state = {
    advance_crop: [],
    advance_crop_error: null,
  },
  action
) => {
  switch (action.type) {
    case ADVANCE_CROP_REQUEST:
      return {
        loading: true,
        advance_crop: [],
      };
    case ADVANCE_CROP_SUCCESS:
      return {
        loading: false,
        advance_crop: action.payload,
      };
    case ADVANCE_CROP_FAIL:
      return {
        loading: false,
        advance_crop_error: action.payload,
      };
    case ADVANCE_CROP_CLEAR_ERRORS:
      return {
        ...state,
        advance_crop_error: null,
      };
    default:
      return state;
  }
};

// Fertilizer Recomendation
export const fertilizer_reducer = (
  state = {
    fertilizer: [],
    fertilizer_error: null,
  },
  action
) => {
  switch (action.type) {
    case FERTILIZER_REQUEST:
      return {
        loading: true,
        fertilizer: [],
      };
    case FERTILIZER_SUCCESS:
      return {
        loading: false,
        fertilizer: action.payload,
      };
    case FERTILIZER_FAIL:
      return {
        loading: false,
        fertilizer_error: action.payload,
      };
    case FERTILIZER_CLEAR_ERRORS:
      return {
        ...state,
        fertilizer_error: null,
      };
    default:
      return state;
  }
};

// Pest Detection
export const pest_reducer = (
  state = {
    pest: [],
    pest_error: null,
  },
  action
) => {
  switch (action.type) {
    case PEST_REQUEST:
      return {
        loading: true,
        pest: [],
      };
    case PEST_SUCCESS:
      return {
        loading: false,
        pest: action.payload,
      };
    case PEST_FAIL:
      return {
        loading: false,
        pest_error: action.payload,
      };
    case PEST_CLEAR_ERRORS:
      return {
        ...state,
        pest_error: null,
      };
    default:
      return state;
  }
};

//Crop disease
export const crop_disease_reducer = (
  state = {
    crop_disease: [],
    crop_disease_error: null,
  },
  action
) => {
  switch (action.type) {
    case CROP_DISEASE_REQUEST:
      return {
        loading: true,
        crop_disease: [],
      };
    case CROP_DISEASE_SUCCESS:
      return {
        loading: false,
        crop_disease: action.payload,
      };
    case CROP_DISEASE_FAIL:
      return {
        loading: false,
        crop_disease_error: action.payload,
      };
    case CROP_DISEASE_CLEAR_ERRORS:
      return {
        ...state,
        crop_disease_error: null,
      };
    default:
      return state;
  }
};
