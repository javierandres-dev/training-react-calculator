import React, { useEffect, useState } from 'react';
import { beep } from '../helpers/beep';
import '../stylesheets/Calculator.css';
import { Key } from './Key';

export const Calculator = () => {
  const [current, setCurrent] = useState(null);
  const [result, setResult] = useState(null);
  const [operator, setOperator] = useState(null);
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [num, setNum] = useState(false);
  const [flag, setFlag] = useState(false);

  const operations = ['/', 'x', '-', '+'];

  const resetNums = () => {
    setNum1(null);
    setNum2(null);
    setOperator(null);
    setFlag(false);
  };

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (operator === '/') {
      setResult(a / b);
    }
    if (operator === 'x') {
      setResult(a * b);
    }
    if (operator === '-') {
      setResult(a - b);
    }
    if (operator === '+') {
      setResult(a + b);
    }
    resetNums();
  };

  const handleClick = (value) => {
    if (!isNaN(value)) {
      if (result) {
        setCurrent(value);
        setNum(true);
        setFlag(true);
      } else if (current === '0') {
        setCurrent(value);
      } else {
        let temp = null;
        if (num1 && !num2 && !flag) {
          temp = '';
          setFlag(true);
        } else {
          temp = current;
        }
        temp += value;
        setCurrent(temp);
      }
    } else if (value === '.') {
      if (typeof current === 'string' && current.includes(value)) {
        beep();
      } else if (operator && typeof current === 'number') {
        beep();
      } else {
        let temp = null;
        typeof current === 'number' ? (temp = '0') : (temp = current);
        temp += value;
        setCurrent(temp);
      }
    } else if (value === '=') {
      setNum(true);
    } else {
      for (const i of operations) {
        if (i === value) {
          setOperator(value);
          setNum(true);
          break;
        }
      }
    }
  };

  useEffect(() => {
    setCurrent('0');
  }, []);

  useEffect(() => {
    if (num && result) {
      setNum1(result);
      setResult(false);
    }
    if (num && !result && !num1) {
      setNum1(current);
    }
    if (num && !result && num1) {
      setNum2(current);
    }
    setNum(false);
  }, [num]);

  useEffect(() => {
    if (num1 && num2) {
      calculate();
    }
  }, [num1, num2]);

  useEffect(() => {
    if (result) {
      setCurrent(result);
    }
  }, [result]);

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
