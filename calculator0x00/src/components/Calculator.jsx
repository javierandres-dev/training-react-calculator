import React from 'react';
import '../stylesheets/Calculator.css';
import { Key } from './Key';

export const Calculator = () => {
  return (
    <div className='calculator'>
      <div className='screen'>0</div>
      <div className='keyboard'>
        <div className='row'>
          <Key>7</Key>
          <Key>8</Key>
          <Key>9</Key>
          <Key>/</Key>
        </div>
        <div className='row'>
          <Key>4</Key>
          <Key>5</Key>
          <Key>6</Key>
          <Key>x</Key>
        </div>
        <div className='row'>
          <Key>1</Key>
          <Key>2</Key>
          <Key>3</Key>
          <Key>-</Key>
        </div>
        <div className='row'>
          <Key>0</Key>
          <Key>.</Key>
          <Key>=</Key>
          <Key>+</Key>
        </div>
      </div>
    </div>
  );
};
