import React, { useEffect, useState } from 'react';
import { beep } from '../helpers/beep';
import '../stylesheets/Calculator.css';
import { Key } from './Key';

export const Calculator = () => {
  const [current, setCurrent] = useState('0');
  const [operator, setOperator] = useState(null);

  const operations = ['/', 'x', '-', '+', '='];

  let temp = null;

  useEffect(() => {
    console.log('current:', current);
    console.log('temp:', temp);
    if (operator === '/') {
      console.log('division');
    } else if (operator === 'x') {
      console.log('multiplication');
    } else if (operator === '-') {
      console.log('subtraction');
    } else if (operator === '+') {
      console.log('addition');
    } else if (operator === '=') {
      console.log('equality');
    }
  }, [operator]);

  const handleClick = (value) => {
    console.log('handleClick', value);
    if (!isNaN(value)) {
      if (current === '0') {
        setCurrent(value);
      } else {
        temp = current;
        setCurrent((temp += value));
        temp = null;
      }
    } else if (value === '.') {
      if (current.includes(value)) {
        beep();
      } else {
        temp = current;
        setCurrent((temp += value));
        temp = null;
      }
    } else {
      for (const i of operations) {
        if (i === value) {
          temp = value;
          setOperator(value);
          break;
        }
      }
    }
  };

  return (
    <div className='calculator'>
      <div className='screen'>{current}</div>
      <div className='keyboard'>
        <div className='row'>
          <Key handleClick={handleClick}>7</Key>
          <Key handleClick={handleClick}>8</Key>
          <Key handleClick={handleClick}>9</Key>
          <Key handleClick={handleClick}>/</Key>
        </div>
        <div className='row'>
          <Key handleClick={handleClick}>4</Key>
          <Key handleClick={handleClick}>5</Key>
          <Key handleClick={handleClick}>6</Key>
          <Key handleClick={handleClick}>x</Key>
        </div>
        <div className='row'>
          <Key handleClick={handleClick}>1</Key>
          <Key handleClick={handleClick}>2</Key>
          <Key handleClick={handleClick}>3</Key>
          <Key handleClick={handleClick}>-</Key>
        </div>
        <div className='row'>
          <Key handleClick={handleClick}>0</Key>
          <Key handleClick={handleClick}>.</Key>
          <Key handleClick={handleClick}>=</Key>
          <Key handleClick={handleClick}>+</Key>
        </div>
      </div>
    </div>
  );
};
