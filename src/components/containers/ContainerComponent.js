import React from "react";
import { Container, Row } from "react-bootstrap";
import FilterComponent from "../childComponents/FilterComponent";
import ListComponent from "../childComponents/ListComponent";
import HeaderComponent from "../childComponents/HeaderComponent";
import FooterComponent from "../childComponents/FooterComponent";

const styleObj = {
  backgroundColor: "#ebe9e9",
};

class ContainerComponent extends React.Component {
  state = { loading: false };
  onChange = (checked) => {
    this.setState({ loading: !checked });
  };
  render() {
    const { loading } = this.state;
    return (
      <Container fluid={true} style={styleObj}>
        <HeaderComponent />
        <Row>
          <FilterComponent />
          <ListComponent />
        </Row>
        <FooterComponent />
      </Container>
    );
  }
}

export default ContainerComponent;
