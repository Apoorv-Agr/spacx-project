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
    fetch(`https://api.spaceXdata.com/v3/launches?limit=100&launch_year=2014`)
      .then((res) => {
        return res.json();
      })
      .then((jsonResp) => {
        // this.setState({ robots: jsonResp });
        dispatch({ type: GET_DATA_ON_LOAD_SUCCESS, payload: jsonResp });
      })
      .catch((err) => {
        dispatch({ type: GET_DATA_ON_LOAD_FAIL, payload: err });
      });
  };
  // console.log('dispatch : ',dispatch);
  // return {type :GET_ROBOTS_PENDING }
};
