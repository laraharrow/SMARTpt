import React, { Component } from 'react';

import PacientInfo from './PacientInfo';
import Checkboxs from './Checkboxs';

class Container extends Component {
  render() {
    return (
      <div>
        <PacientInfo />
        <Checkboxs />
      </div>
    );
  }
}

export default Container;
