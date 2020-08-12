import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';

export default class SuccessfulLanding extends Component {
    state = {
        selectedButton: ''
    }

    handleSuccessfulLanding = (e) => {
        this.setState({ selectedButton: e.target.name });
        this.props.updateLandSuccess(e.target.value);
    }
    
    render() {
        return (
          <>
            <div className="text-center">Successful Landing</div>
            <Row xs="2" md="2" lg="2" xl="2">
              <Col className="text-center my-2">
                <Button
                  name="truthy"
                  color={
                    this.state.selectedButton === "truthy" ? "secondary" : "success"
                  }
                  value="true"
                  onClick={this.handleSuccessfulLanding}
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
                  onClick={this.handleSuccessfulLanding}
                >
                  False
                </Button>
              </Col>
            </Row>
          </>
        );
    }
}
