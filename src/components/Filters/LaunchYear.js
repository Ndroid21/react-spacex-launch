import React, { Component } from "react";
import { Row, Col, Button } from 'reactstrap';

export default class LaunchYear extends Component {
    state = {
        selectedButton: ''
    }
    
    handleYearChange = (e) => {
      this.setState({ selectedButton: e.target.name });
      this.props.updateLaunchYear(e.target.value);
    } 
    
    render() {
        return (
          <>
            <div className="text-center">Launch Year</div>
            <Row xs="2" md="2" lg="2" xl="2">
              <Col className="text-center my-2">
                <Button
                  name="2006"
                  color={
                    this.state.selectedButton === "2006" ? "secondary" : "success"
                  }
                  value="2006"
                  onClick={this.handleYearChange}
                >
                  2006
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2007"
                  color={
                    this.state.selectedButton === "2007" ? "secondary" : "success"
                  }
                  value="2007"
                  onClick={this.handleYearChange}
                >
                  2007
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2008"
                  color={
                    this.state.selectedButton === "2008" ? "secondary" : "success"
                  }
                  value="2008"
                  onClick={this.handleYearChange}
                >
                  2008
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2009"
                  color={
                    this.state.selectedButton === "2009" ? "secondary" : "success"
                  }
                  value="2009"
                  onClick={this.handleYearChange}
                >
                  2009
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2010"
                  color={
                    this.state.selectedButton === "2010" ? "secondary" : "success"
                  }
                  value="2010"
                  onClick={this.handleYearChange}
                >
                  2010
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2011"
                  color={
                    this.state.selectedButton === "2011" ? "secondary" : "success"
                  }
                  value="2011"
                  onClick={this.handleYearChange}
                >
                  2011
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2012"
                  color={
                    this.state.selectedButton === "2012" ? "secondary" : "success"
                  }
                  value="2012"
                  onClick={this.handleYearChange}
                >
                  2012
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2013"
                  color={
                    this.state.selectedButton === "2013" ? "secondary" : "success"
                  }
                  value="2013"
                  onClick={this.handleYearChange}
                >
                  2013
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2014"
                  color={
                    this.state.selectedButton === "2014" ? "secondary" : "success"
                  }
                  value="2014"
                  onClick={this.handleYearChange}
                >
                  2014
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2015"
                  color={
                    this.state.selectedButton === "2015" ? "secondary" : "success"
                  }
                  value="2015"
                  onClick={this.handleYearChange}
                >
                  2015
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2016"
                  color={
                    this.state.selectedButton === "2016" ? "secondary" : "success"
                  }
                  value="2016"
                  onClick={this.handleYearChange}
                >
                  2016
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2017"
                  color={
                    this.state.selectedButton === "2017" ? "secondary" : "success"
                  }
                  value="2017"
                  onClick={this.handleYearChange}
                >
                  2017
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2018"
                  color={
                    this.state.selectedButton === "2018" ? "secondary" : "success"
                  }
                  value="2018"
                  onClick={this.handleYearChange}
                >
                  2018
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2019"
                  color={
                    this.state.selectedButton === "2019" ? "secondary" : "success"
                  }
                  value="2019"
                  onClick={this.handleYearChange}
                >
                  2019
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="2020"
                  color={
                    this.state.selectedButton === "2020" ? "secondary" : "success"
                  }
                  value="2020"
                  onClick={this.handleYearChange}
                >
                  2020
                </Button>
              </Col>
            </Row>
          </>
        );
    }
}
