import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { textAlign, horizontalLineObj, filterDiv } from "../../css/style";

class FilterDisplayComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { selectedVal, onBtnClick } = this.props;
    return (
      <>
        <div style={textAlign}>{this.props.heading}</div>
        <hr style={horizontalLineObj}></hr>
        <div style={filterDiv}>
          {this.props.typeData === "num"
            ? this.props.dataArr.map((val, idx) => {
                return (
                  <Button
                    key={`${val}_${idx}`}
                    variant="success"
                    size="sm"
                    active={val === selectedVal ? true : false}
                    onClick={() => {
                      onBtnClick(val);
                    }}
                  >
                    {val}
                  </Button>
                );
              })
            : this.props.dataArr.map((val, idx) => {
                return (
                  <Button
                    key={`${val}_${idx}`}
                    variant="success"
                    size="sm"
                    active={val === selectedVal ? true : false}
                    onClick={() => {
                      onBtnClick(val);
                    }}
                  >
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
