import React, { Component } from 'react';

import ErrorIndicator from '../error-indicator';

class ErrorBoundry extends Component {
  
  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  };

  render() {
    const { error } = this.state;

    if(error) return <ErrorIndicator />

    return this.props.children
  };
};

export default ErrorBoundry;