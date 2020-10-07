import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { textAlign, horizontalLineObj, filterDiv } from "../../css/style";

class FilterDisplayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div style={textAlign}>{this.props.heading}</div>
        <hr style={horizontalLineObj}></hr>
        <div style={filterDiv}>
          {this.props.typeData === "num"
            ? this.props.dataArr.map((val, idx) => {
                return (
                  <Button key={`${val}_${idx}`} variant="success" size="sm" active = { val === this.props.selectedVal ? true : false}>
                    {val}
                  </Button>
                );
              })
            : this.props.dataArr.map((val, idx) => {
                return (
                  <Button key={`${val}_${idx}`} variant="success" size="sm">
                    {val === true ? "True" : "False"}
                  </Button>
                );
              })}
        </div>
      </>
    );
  }
}

export default FilterDisplayComponent;
