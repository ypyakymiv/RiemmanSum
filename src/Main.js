import React, { Component } from 'react';
import Graph from './Graph';
import MathInput from './MathInput';
import Sliders from './Sliders';
import Selector from './Selector';
import Stats from './Stats';

const Main = () => {
  return (
    <div>
      <Graph />
      <MathInput />
      <Sliders />
      <Selector />
      <Stats />
    </div>
  );
}

export default Main;
