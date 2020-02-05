import PropTypes from "prop-types";
import React from "react";
import Card from '../Card/Card.js';
import * as S from './styled';

const Counter = ({ currency, value, onIncrement, onDecrement }) => (
  <S.CounterWrapper>
    <Card currency={currency} balance={value} name="Ademílson Tonato" />
    <S.Button background="#C8EA90" onClick={onIncrement}>Increment</S.Button>{" "}
    <S.Button background="#e65e6a" onClick={onDecrement}>Decrement</S.Button>
  </S.CounterWrapper>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
export default Counter;
