import React, { Component } from 'react';
import classNames from 'classnames';

class PrincipleList extends Component {
  principleSatisfied(principle) {
    let { password } = this.props;
    return principle.predicate(password);
  }

  principleClass(principle) {
    let satisfied = this.principleSatisfied(principle);

    return classNames({
      ['text-success']: satisfied,
      ['text-danger']: !satisfied
    });
  }

  render() {
    let { principles } = this.props;
    return (
      <ul>
        {principles.map((principle, i) => (
          <li key={i} className={this.principleClass(principle)}>
            <small>{principle.label}</small>
          </li>
        ))}
      </ul>
    );
  }
}

export default PrincipleList;
