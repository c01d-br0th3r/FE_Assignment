import React from "react";
import * as S from "./style";

const Checkbox: React.FC<S.ICheckboxProps> = ({ id, checked, setChecked }) => {
  return (
    <S.StyledCheckbox
      id={id}
      className={checked ? "checked" : ""}
      checked={checked}
      onClick={setChecked}
    />
  );
};

export default Checkbox;
