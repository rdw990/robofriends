import React, {Component} from 'react';

class ErrorBoundry extends Comment {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
}

export default ErrorBoundry;