import React from "react";
import * as S from "./style";

const Checkbox: React.FC<S.ICheckboxProps> = ({
  checked,
  setChecked,
  onClick,
}) => {
  const handleClick = () => {
    if (setChecked) setChecked();
    if (onClick) onClick();
  };
  return <S.StyledCheckbox checked={checked} onClick={handleClick} />;
};

export default Checkbox;
