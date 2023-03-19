import React from 'react';
import './Common.css';
import asset from './assets/whiskey.png'

const AnimatedDrink: React.FC = () => {

  return (
    <img src={asset} alt="spinner" className="animated-image" />
  );
}

export default AnimatedDrink;
