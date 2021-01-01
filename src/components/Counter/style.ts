import styled from "styled-components";

export interface ICounterProps {
  value?: number;
  countUp?: () => void;
  countDown?: () => void;
}

export const CounterWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #c2c2c2;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
`;

export const CounterValue = styled.div`
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #c2c2c2;
  border-right: 1px solid #c2c2c2;
`;

export const CounterButton = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
`;
