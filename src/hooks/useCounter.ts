import { useState } from "react";

export const useCounter = (initialState: number, maxNumber: number) => {
  const [count, setCount] = useState<number>(initialState);
  const countUp = () => {
    if (count < maxNumber) setCount((prev) => prev + 1);
  };
  const countDown = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };
  return { count, countUp, countDown };
};
