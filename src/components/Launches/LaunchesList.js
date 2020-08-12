import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import LaunchCard from './LaunchCard';

class LaunchesList extends Component {

    render() {
        return (
          <Row xs="1" sm="2" md="2" lg="4" xl="4">
            {this.props.launches.map((launch) => (
              <Col>
                <LaunchCard
                  key={launch.mission_name}
                  imgSrc={launch.links.mission_patch_small}
                  missionName={launch.mission_name}
                  flightNumber={launch.flight_number}
                  missionIds={launch.mission_id}
                  launchYear={launch.launch_year}
                  launchSuccess={launch.launch_success}
                  launchLanding={launch.launch_landing}
                />
              </Col>
            ))}
          </Row>
        );
    }
}

export default LaunchesList;
