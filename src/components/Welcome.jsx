import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };
  render() {
    const { isHovered } = this.state;

    return (
      <div
        className={`jumbotron jumbotron-fluid ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className="container">
          <h1 className="display-3 mb-3 text-danger fw-bold">LIBRERIA</h1>
          <p className="lead fs-3">
           La lettura rende forti -- <strong className='fs-5'>r.r.</strong>
          </p>
        </div>
      </div>
    );
  }
}

export default Welcome;

