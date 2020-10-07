import {
  GET_DATA_ON_LOAD_PENDING,
  GET_DATA_ON_LOAD_FAIL,
  GET_DATA_ON_LOAD_SUCCESS,
  GET_DATA_ON_FILTER_PENDING,
  GET_DATA_ON_FILTER_SUCCESS,
  GET_DATA_ON_FILTER_FAIL,
} from "../constants";
export const getLaunchData = () => {
  return (dispatch) => {
    dispatch({ type: GET_DATA_ON_LOAD_PENDING });
    fetch(`https://api.spaceXdata.com/v3/launches?limit=100`)
      .then((res) => {
        return res.json();
      })
      .then((jsonResp) => {
        dispatch({ type: GET_DATA_ON_LOAD_SUCCESS, payload: jsonResp });
      })
      .catch((err) => {
        dispatch({ type: GET_DATA_ON_LOAD_FAIL, payload: err });
      });
  };
};
export const getLaunchFilterData = ({
  year,
  successLaunch = null,
  successLand = null,
}) => {
  return (dispatch) => {
    let url = `https://api.spaceXdata.com/v3/launches?limit=100`;
    if (year) {
      url += `&launch_year=${year}`;
    }
    if (successLaunch != null) {
      url += `&launch_success=${successLaunch}`;
    }
    if (successLand != null) {
      url += `&land_success=${successLand}`;
    }
    dispatch({ type: GET_DATA_ON_FILTER_PENDING });
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((jsonResp) => {
        dispatch({ type: GET_DATA_ON_FILTER_SUCCESS, payload: jsonResp });
      })
      .catch((err) => {
        dispatch({ type: GET_DATA_ON_FILTER_FAIL, payload: err });
      });
  };
};
