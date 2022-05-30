import React from 'react';
import '../stylesheets/Key.css';

export const Key = ({ children, handleClick }) => {
  return (
    <button className='key' onClick={() => handleClick(children)}>
      {children}
    </button>
  );
};
