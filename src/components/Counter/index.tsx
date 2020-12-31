import React from "react";
import * as S from "./style";

const Counter: React.FC<S.ICounterProps> = ({ value, countUp, countDown }) => {
  return (
    <S.CounterWrapper>
      <S.CounterButton onClick={countDown}>
        <i className="fas fa-minus" />
      </S.CounterButton>
      <S.CounterValue>{value}</S.CounterValue>
      <S.CounterButton onClick={countUp}>
        <i className="fas fa-plus" />
      </S.CounterButton>
    </S.CounterWrapper>
  );
};

export default Counter;
