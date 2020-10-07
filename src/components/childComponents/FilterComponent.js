import React from "react";
import { Col } from "react-bootstrap";
import { filterStyle } from "../../css/style";
import { YEARS_ARR } from "../../constants";
import FilterDisplayComponent from "./FilterDisplayComponent";
class FilterComponent extends React.Component {
  state = { selectedVal: 2006 };
  render() {
    return (
      <Col lg={2} xs={12}>
        <div style={filterStyle}>
          <FilterDisplayComponent
            heading="Launch Year"
            typeData="num"
            dataArr={YEARS_ARR}
            selectedVal={this.state.selectedVal}
          />
          <br />
          <FilterDisplayComponent
            heading="Successful Launch"
            typeData="bool"
            dataArr={[true, false]}
          />
          <br />
          <FilterDisplayComponent
            heading="Successful Landing"
            typeData="bool"
            dataArr={[true, false]}
          />
          <br />
        </div>
      </Col>
    );
  }
}

export default FilterComponent;
