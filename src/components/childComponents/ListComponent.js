import React from "react";
import { Row, Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { connect } from "react-redux";

class ListComponent extends React.Component {
  state = {};
  render() {
    // console.log("props", this.props.getLaunchData);
    const { data } = this.props.getLaunchData;
    console.log("props", data);
    return (
      <Col lg={10} xs={12}>
        <Row>
          {data &&
            data.map((el, idx) => {
              const {
                launch_date_unix,
                flight_number,
                rocket,
                links,
                mission_id,
                launch_year,
                launch_success,
              } = el;
              return (
                <Col
                  key={`${launch_date_unix}_${flight_number}_${rocket.rocket_id}`}
                  lg={3}
                  xs={12}
                  style={{ marginBottom: "20px" }}
                >
                  <Card>
                    <Card.Img variant="top" src={links.mission_patch_small} />
                    <Card.Body>
                      <Card.Title>{rocket.rocket_name}</Card.Title>
                      <Card.Text>
                        <b>Mission Ids: </b>
                        <ul>
                          {mission_id.map((el, idx) => {
                            return <li key={`${el}_${idx}`}>{el}</li>;
                          })}
                        </ul>
                      </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <b>Launch Year: </b>
                        {launch_year}
                      </ListGroupItem>
                      <ListGroupItem>
                        <b>Successful Launch: </b>
                        {launch_success ? "true" : "false"}
                      </ListGroupItem>
                      <ListGroupItem>
                        <b>Successful Landing: </b>
                        {rocket.cores && rocket.cores[0].land_success
                          ? "true"
                          : "false"}
                      </ListGroupItem>
                    </ListGroup>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Col>
    );
  }
}

const mapStateToProps = (appState) => {
  return {
    getLaunchData: appState.getLaunchDataReducer,
  };
};

export default connect(mapStateToProps, {})(ListComponent);
