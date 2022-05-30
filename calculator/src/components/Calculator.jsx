import React, { useEffect, useState } from 'react';
import { beep } from '../helpers/beep';
import '../stylesheets/Calculator.css';
import { Key } from './Key';

export const Calculator = () => {
  const [current, setCurrent] = useState('0');
  const [operator, setOperator] = useState(null);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [pending, setPending] = useState(null);

  const operations = ['/', 'x', '-', '+', '='];

  const calculate = () => {
    if (operator === '/') {
      setCurrent(num1 / num2);
    }
    if (operator === 'x') {
      setCurrent(num1 * num2);
    }
    if (operator === '-') {
      setCurrent(num1 - num2);
    }
    if (operator === '+') {
      setCurrent(num1 + num2);
    }
    if (operator === '=') {
      console.log('equality');
    }
    setOperator(null);
    setNum1(null);
    setNum2(null);
    setPending(null);
  };

  useEffect(() => {
    if (operator && !num1) {
      setNum1(current);
      setPending(true);
    }
    if (operator && num1 && pending) {
      console.log('here');
      setNum2(current);
      setPending(true);
    }
  }, [operator, num1, num2, pending]);

  const handleClick = (value) => {
    if (!isNaN(value)) {
      if (current === '0') {
        setCurrent(value);
      } else {
        let temp = null;
        if (pending && num1) {
          temp = '';
          setPending(false);
        } else {
          temp = current;
        }
        temp += value;
        setCurrent(temp);
      }
    } else if (value === '.') {
      if (current.includes(value)) {
        beep();
      } else {
        let temp = current;
        temp += value;
        setCurrent(temp);
      }
    } else {
      for (const i of operations) {
        if (i === value) {
          setOperator(value);
          break;
        }
      }
    }
  };

  console.log('current:', current);
  console.log('operator:', operator);
  console.log('num1:', num1);
  console.log('num2:', num2);
  console.log('pending:', pending);

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
