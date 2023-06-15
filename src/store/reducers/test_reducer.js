import {
  TEST_REQUEST,
  TEST_SUCCESS,
  TEST_FAIL,
  TEST_CLEAR_ERROR,
  GET_TEST_REQUEST,
  GET_TEST_SUCCESS,
  GET_TEST_FAIL,
  GET_TEST_CLEAR_ERROR,
} from "../constants/tests_constants";
export const test_reducer = (
  state = {
    test: [],
  },
  action
) => {
  switch (action.type) {
    case TEST_REQUEST:
      return {
        loading: true,
        test: [],
      };
    case TEST_SUCCESS:
      return {
        loading: false,
        test: action.payload.data,
      };
    case TEST_FAIL:
      return {
        loading: false,
        test: null,
        test_error: action.payload,
      };

    case TEST_CLEAR_ERROR:
      return {
        ...state,
        test_error: null,
      };
    default:
      return state;
  }
};
export const all_test_reducer = (
  state = {
    all_test: [],
  },
  action
) => {
  switch (action.type) {
    case GET_TEST_REQUEST:
      return {
        test_loading: true,
        all_test: [],
      };
    case GET_TEST_SUCCESS:
      return {
        test_loading: false,
        all_test: action.payload.data,
      };
    case GET_TEST_FAIL:
      return {
        test_loading: false,
        all_test: null,
        all_test_error: action.payload,
      };

    case GET_TEST_CLEAR_ERROR:
      return {
        ...state,
        all_test_error: null,
      };
    default:
      return state;
  }
};
