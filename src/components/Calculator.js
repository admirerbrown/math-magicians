/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class CalcDesign extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="digit cal-output">0</div>
        <div className="digit gray">AC</div>
        <div className="digit gray">+/-</div>
        <div className="digit gray">%</div>
        <div className="digit orange">/</div>
        <div className="digit gray">7</div>
        <div className="digit gray">8</div>
        <div className="digit gray">9</div>
        <div className="digit orange">x</div>
        <div className="digit gray">4</div>
        <div className="digit gray">5</div>
        <div className="digit gray">6</div>
        <div className="digit orange"> -</div>
        <div className="digit gray">1</div>
        <div className="digit gray">2</div>
        <div className="digit gray">3</div>
        <div className="digit orange">+</div>
        <div className="digit gray zero-zone">0</div>
        <div className="digit gray"> . </div>
        <div className="digit orange"> = </div>
      </div>
    );
  }
}
export default CalcDesign;
