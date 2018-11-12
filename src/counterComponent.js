import React from 'react';



const CounterComponent = ({ counter, add1Action, remove1Action, add10Action, remove10Action, resetAction }) => (
  <div>
    <p>{counter}</p>
    <button onClick={add1Action}>Add 1</button>
    <button onClick={remove1Action}>Remove 1</button>
    <button onClick={add10Action}>Add 10</button>
    <button onClick={remove10Action}>Remove 10</button>
    <button onClick={resetAction}>Reset</button>
  </div>
);

export default CounterComponent;