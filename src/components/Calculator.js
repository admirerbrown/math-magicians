/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
import calculate from '../logic/Calculate';

const CalcDesign = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  //   //* add react event handler of click to listen to clicks on the button elements...
  const handleClick = (e) => {
    const buttonName = e.target.innerText;
    setState((prevState) => {
      const newState = calculate(prevState, buttonName);
      return newState;
    });
  };

  const { total, next, operation } = state;
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
            onClick={handleClick}
            onKeyDown={handleClick}
          >
            {digit}
          </div>
        );
      })}
    </div>
  );
};

export default CalcDesign;
