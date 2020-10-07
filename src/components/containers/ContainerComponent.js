import React from "react";
import { Container, Row } from "react-bootstrap";
import FilterComponent from "../childComponents/FilterComponent";
import ListComponent from "../childComponents/ListComponent";
import HeaderComponent from "../childComponents/HeaderComponent";
import FooterComponent from "../childComponents/FooterComponent";
import { connect } from "react-redux";
import { getLaunchData } from "../../actions";
import { styleObj } from "../../css/style";

class ContainerComponent extends React.Component {
  state = {};
  componentDidMount() {
    this.props.getLaunchDataAction();
  }

  render() {
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
const mapDispatchToProps = (dispatch) => {
  return {
    getLaunchDataAction: () => {
      dispatch(getLaunchData());
    },
  };
};
const mapStateToProps = (appState) => {
  return {
    loader: appState.getLaunchDataReducer.showLoader,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContainerComponent);
