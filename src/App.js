import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner } from "reactstrap";
import Filters from './components/Filters/Filters';
import LaunchesList from './components/Launches/LaunchesList';

class App extends Component {
  state = {
    launches: [],
    launch_year: null,
    launch_success: null,
    land_success: null,
    isLoading: false
  };

  componentDidMount() {
    this.fetchLaunches(this.state);
  }

  updateLaunchYear = (val) => {
    this.setState({ launch_year: val }, () => this.fetchLaunches());
  };

  updateLaunchSuccess = (val) => {
    this.setState({ launch_success: val }, () => this.fetchLaunches());
  };

  updateLandSuccess = (val) => {
    this.setState({ land_success: val }, () => this.fetchLaunches());
  };

  fetchLaunches = async () => {
    const { launch_year, launch_success, land_success } = this.state;
    this.setState({ isLoading: true })
    let api_url = "https://api.spacexdata.com/v3/launches?limit=100";
    let appendQuery = '?limit=100';

    if (launch_year != null) {
      api_url += `&launch_year=${launch_year}`;
      appendQuery += `&launch_year=${launch_year}`;
    }

    if (launch_success != null) {
      api_url += `&launch_success=${launch_success}`;
      appendQuery += `&launch_success=${launch_success}`;
    }

    if (land_success != null) {
      api_url += `&land_success=${land_success}`;
      appendQuery += `&land_success=${land_success}`;
    }

    this.props.history.push({
      pathname: "/",
      search: appendQuery,
    });

    const response = await axios.get(`${api_url}`);
    this.setState({ isLoading: false, launches: response.data });
  };

  loadLaunches = () => {
    const { isLoading, launches } = this.state;

    if(isLoading){
      return (
        <div className="d-flex justify-content-md-center align-items-center vh-100">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      );
    }

    if(launches.length > 0){
      return <LaunchesList launches={launches} />;
    }

    return (
      <div className="d-flex justify-content-md-center align-items-center vh-100">
        <h2>No Data</h2>
      </div>
    );
  }

  render() {
    const { launches } = this.state;
    return (
      <Container>
        <h2>SpaceX Launch Programs</h2>
        <Row>
          <Col xs="12" sm="4" md="4" lg="3" xl="3">
            <Filters
              updateLaunchYear={this.updateLaunchYear}
              updateLaunchSuccess={this.updateLaunchSuccess}
              updateLandSuccess={this.updateLandSuccess}
            />
          </Col>
          <Col xs="12" sm="8" md="8" lg="9" xl="9">
            { this.loadLaunches() }
          </Col>
        </Row>
        <h5 className="text-center">Developed by: Nishant Kashyap</h5>
      </Container>
    );
  }
}

export default App;