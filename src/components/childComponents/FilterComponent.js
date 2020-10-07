import React from "react";
import { Col, Button } from "react-bootstrap";
class FilterComponent extends React.Component {
  state = {};
  render() {
    return (
      <Col lg={2} xs={12}>
        <div
          style={{
            backgroundColor: "rgb(254, 254, 254)",
            borderRadius: "5px",
            padding: "20px 0px 50px 0px",
          }}
        >
          <div style={{ textAlign: "center" }}>Launch Year</div>
          <hr
            style={{
              width: "50%",
              margin: "10px auto",
            }}
          ></hr>
          <div
            style={{
              justifyContent: "space-around",
              display: "flex",
            }}
          >
            <Button variant="primary" size="sm">
              2006
            </Button>{" "}
            <Button variant="secondary" size="sm">
              2007
            </Button>
          </div>
        </div>
      </Col>
    );
  }
}

export default FilterComponent;
