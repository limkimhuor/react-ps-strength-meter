import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

import PrincipleList from './PrincipleList';
import PrinciplesProgress from './PrinciplesProgress';

class StrengthMeter extends Component {
  render() {
    return (
      <Panel>
        <Panel.Body className="text-left">
          <PrinciplesProgress {...this.props} />
          <h4>A good password is:</h4>
          <PrincipleList {...this.props} />
        </Panel.Body>
      </Panel>
    );
  }
}

export default StrengthMeter;
