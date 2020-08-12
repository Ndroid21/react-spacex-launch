import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

export default class SuccessfulLaunch extends Component {
    state = {
        selectedButton: ''
    }

    handleLaunchSuccess = (e) => {
        this.setState({ selectedButton: e.target.name });
        this.props.updateLaunchSuccess(e.target.value)
    }

    render() {
        return (
          <>
            <div className="text-center">Successful Launch</div>
            <Row xs="2" md="2" lg="2" xl="2">
              <Col className="text-center my-2">
                <Button
                  name="truthy"
                  color={
                    this.state.selectedButton === "truthy" ? "secondary" : "success"
                  }
                  value="true"
                  onClick={this.handleLaunchSuccess}
                >
                  True
                </Button>
              </Col>
              <Col className="text-center my-2">
                <Button
                  name="falsey"
                  color={
                    this.state.selectedButton === "falsey" ? "secondary" : "success"
                  }
                  value="false"
                  onClick={this.handleLaunchSuccess}
                >
                  False
                </Button>
              </Col>
            </Row>
          </>
        );
    }
}
