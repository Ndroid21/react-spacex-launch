import React, { Component } from 'react';
import LaunchYear from './LaunchYear';
import SuccessfulLaunch from './SuccessfulLaunch';
import SuccessfulLanding from './SuccessfulLanding';

export default class Filters extends Component {
    render() {
        return (
          <div className="card card-body mb-2">
            <h4>Filters</h4>
            <LaunchYear updateLaunchYear={this.props.updateLaunchYear} />
            <SuccessfulLaunch
              updateLaunchSuccess={this.props.updateLaunchSuccess}
            />
            <SuccessfulLanding
              updateLandSuccess={this.props.updateLandSuccess}
            />
          </div>
        );
    }
}
