import {
  GET_DATA_ON_LOAD_PENDING,
  GET_DATA_ON_LOAD_FAIL,
  GET_DATA_ON_LOAD_SUCCESS,
  GET_DATA_ON_FILTER_PENDING,
  GET_DATA_ON_FILTER_SUCCESS,
  GET_DATA_ON_FILTER_FAIL,
} from "../constants";

import { combineReducers } from "redux";

const initialAppState = {
  data: [],
  error: "",
  isPending: false,
  showLoader: true,
};

const getLaunchDataReducer = (state = initialAppState, action = {}) => {
  //   debugger;
  switch (action.type) {
    case GET_DATA_ON_LOAD_PENDING:
      return { ...state, isPending: true, showLoader: true };
    case GET_DATA_ON_LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isPending: false,
        showLoader: false,
      };
    case GET_DATA_ON_LOAD_FAIL:
      return {
        ...state,
        isPending: false,
        error: action.payload,
        showLoader: false,
      };
    case GET_DATA_ON_FILTER_PENDING:
      return { ...state, data: [], isPending: true, showLoader: true };
    case GET_DATA_ON_FILTER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isPending: false,
        showLoader: false,
      };
    case GET_DATA_ON_FILTER_FAIL:
      return {
        ...state,
        data: [],
        isPending: false,
        error: action.payload,
        showLoader: false,
      };
    default:
      return state;
  }
};

const getAppData = combineReducers({ getLaunchDataReducer });

export default getAppData;
