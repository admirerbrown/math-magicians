/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import calculate from '../logic/Calculate';

class CalcDesign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  //* add react event handler of click to listen to clicks on the button elements...
  handleClick = (e) => {
    const buttonName = e.target.innerText;
    this.setState((prevState) => {
      const newState = calculate(prevState, buttonName);
      return newState;
    });
  };

  render() {
    const { total, next, operation } = this.state;
    const digits = [
      'AC',
      '+/-',
      '%',
      '÷',
      '7',
      '8',
      '9',
      'x',
      '4',
      '5',
      '6',
      '-',
      '1',
      '2',
      '3',
      '+',
      '0',
      '.',
      '=',
    ];

    return (
      <div className="grid-container">
        <div className="digit cal-output">
          {total || 0}
          {operation}
          {next}
        </div>
        {digits.map((digit) => {
          let className = 'digit';
          if (
            digit === 'AC'
            || digit === '+/-'
            || digit === '%'
            || digit === '1'
            || digit === '2'
            || digit === '3'
            || digit === '4'
            || digit === '5'
            || digit === '6'
            || digit === '7'
            || digit === '8'
            || digit === '9'
            || digit === '0'
            || digit === '.'
          ) {
            className += ' gray';
          } else if (
            digit === 'x'
            || digit === '-'
            || digit === '+'
            || digit === '='
            || digit === '÷'
          ) {
            className += ' orange';
          }
          if (digit === '0') {
            className += ' zero-zone';
          }
          return (
            <div
              key={digit}
              className={className}
              onClick={this.handleClick}
              onKeyDown={this.handleClick}
            >
              {digit}
            </div>
          );
        })}
      </div>
    );
  }
}

export default CalcDesign;
