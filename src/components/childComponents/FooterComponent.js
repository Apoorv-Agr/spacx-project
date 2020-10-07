import React, { Component } from "react";
// import { Row } from "react-bootstrap";
import { textAlign, marginBottom5 } from "../../css/style";
class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <div style={{ ...textAlign, ...marginBottom5 }}>
        <span>
          {" "}
          <b>Developed by : </b>Apoorv Agrawal
        </span>
      </div>
    );
  }
}

export default FooterComponent;
