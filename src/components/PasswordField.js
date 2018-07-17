import React, { Component, Fragment } from 'react';
import { ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import classNames from 'classnames';

class PasswordField extends Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(ev) {
    let { onPasswordChange } = this.props;
    onPasswordChange(ev.target.value);
    console.log(ev.target.value);
  }

  satisfiedPercent() {
    let { principles, password } = this.props;

    let satisfiedCount = principles
      .map(p => p.predicate(password))
      .reduce((count, satified) => count + (satified ? 1 : 0), 0);
    let principlesCount = principles.length;
    return (satisfiedCount / principlesCount) * 100.0;
  }

  inputColor() {
    let percentage = this.satisfiedPercent();
    let inputCol = classNames({
      error: percentage < 33.4,
      success: percentage >= 66.7,
      warning: percentage >= 33.4 && percentage < 66.7
    });
    console.log(inputCol);
    return inputCol;
  }
  render() {
    let { password } = this.props;
    return (
      <FormGroup
        controlId="formValidationWarning2"
        validationState={this.inputColor()}
      >
        <ControlLabel>Please input password</ControlLabel>
        <FormControl
          type="password"
          label="Password"
          value={password}
          onChange={this.handlePasswordChange}
        />
        <FormControl.Feedback />
      </FormGroup>
    );
  }
}

export default PasswordField;
