import React from "react";
import { Col } from "react-bootstrap";
import { filterStyle } from "../../css/style";
import { YEARS_ARR } from "../../constants";
import FilterDisplayComponent from "./FilterDisplayComponent";
import { getLaunchFilterData } from "../../actions";
import { connect } from "react-redux";

class FilterComponent extends React.Component {
  state = { selectedVal: null, selectedLaunch: null, selectedLanding: null };
  onYearSelect = (val) => {
    this.setState(
      (prevState) => ({
        selectedVal: val === prevState.selectedVal ? null : val,
      }),
      () => {
        this.props.getLaunchFilterDataAction({
          year: this.state.selectedVal,
          successLaunch: this.state.selectedLaunch,
          successLand: this.state.selectedLanding,
        });
      }
    );
    // this.setState({ selectedVal: val });
  };
  onLaunchSelect = (val) => {
    this.setState(
      (prevState) => ({
        selectedLaunch: val === prevState.selectedLaunch ? null : val,
      }),
      () => {
        this.props.getLaunchFilterDataAction({
          year: this.state.selectedVal,
          successLaunch: this.state.selectedLaunch,
          successLand: this.state.selectedLanding,
        });
      }
    );
  };
  onLandSelect = (val) => {
    this.setState(
      (prevState) => ({
        selectedLanding: val === prevState.selectedLanding ? null : val,
      }),
      () => {
        this.props.getLaunchFilterDataAction({
          year: this.state.selectedVal,
          successLaunch: this.state.selectedLaunch,
          successLand: this.state.selectedLanding,
        });
      }
    );
  };
  render() {
    return (
      <Col lg={2} xs={12}>
        <div style={filterStyle}>
          <FilterDisplayComponent
            heading="Launch Year"
            typeData="num"
            dataArr={YEARS_ARR}
            selectedVal={this.state.selectedVal}
            onBtnClick={this.onYearSelect}
          />
          <br />
          <FilterDisplayComponent
            heading="Successful Launch"
            typeData="bool"
            dataArr={[true, false]}
            selectedVal={this.state.selectedLaunch}
            onBtnClick={this.onLaunchSelect}
          />
          <br />
          <FilterDisplayComponent
            heading="Successful Landing"
            typeData="bool"
            dataArr={[true, false]}
            selectedVal={this.state.selectedLanding}
            onBtnClick={this.onLandSelect}
          />
          <br />
        </div>
      </Col>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getLaunchFilterDataAction: (obj) => {
      dispatch(getLaunchFilterData(obj));
    },
  };
};
const mapStateToProps = (appState) => {
  return {
    loader: appState.getLaunchDataReducer.showLoader,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);
