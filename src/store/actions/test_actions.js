import axiox from "axios";
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
// add
export const add_test = (payloadData) => async (dispatch) => {
  try {
    dispatch({
      type: TEST_REQUEST,
    });
    const test = await axiox.post(
      `${process.env.REACT_APP_API_URL}/tests/add-test-for-farmers/`,
      payloadData
    );
    dispatch({
      type: TEST_SUCCESS,
      payload: test,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: TEST_FAIL,
      payload: error.response.data,
    });
  }
};
export const test_clearErrors = () => async (dispatch) => {
  dispatch({
    type: TEST_CLEAR_ERROR,
  });
};
//get
export const get_test = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_TEST_REQUEST,
    });
    const test = await axiox.get(
      `${process.env.REACT_APP_API_URL}/tests/get-test-for-farmers/`
    );
    dispatch({
      type: GET_TEST_SUCCESS,
      payload: test,
    });
  } catch (error) {
    console.log(error);

    dispatch({
      type: GET_TEST_FAIL,
      payload: error.response.data,
    });
  }
};
export const all_test_clearErrors = () => async (dispatch) => {
  dispatch({
    type: GET_TEST_CLEAR_ERROR,
  });
};
