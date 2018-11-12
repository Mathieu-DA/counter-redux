import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => ({
  counter: state
});

const mapDispatchToProps = dispatch => ({
  add1Action: () => dispatch({ type: 'ADD1' }),
  remove1Action: () => dispatch({type: 'REMOVE1'}),
  add10Action: () => dispatch({type: 'ADD10'}),
  remove10Action: () => dispatch({type: 'REMOVE10'}),
  resetAction: () => dispatch({type: 'RESET'}),
});



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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterComponent);
