import React from "react";
import Fade from 'react-reveal/Fade';
import * as S from './styled';

const getBalance = (amount) => {
  if (amount > 1000000000) {
    return `(+) 1000000000`
  }
  return amount;
}
const isNegative = amount => {
  return amount < 0
}

const Card = ({ name, balance = 0, currency }) => (
  <S.CardWrapper>
    <S.Card>
      <S.CardOwner>{name}</S.CardOwner>
      <S.CardNumber>{currency} {getBalance(balance)}</S.CardNumber>

      <Fade bottom when={isNegative(balance)}>
        <S.CardMessage>Your balance is negative.</S.CardMessage>
      </Fade>

    </S.Card>
  </S.CardWrapper>
);

export default Card;
