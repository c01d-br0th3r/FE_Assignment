import Label from "components/Label";
import React from "react";
import * as S from "./style";

const Dropdown: React.FC<S.IDropdownProps> = ({
  value = "",
  setValue,
  open = false,
  setOpen,
  children,
  disabled = false,
}) => {
  return (
    <S.DropdownWrapper onClick={setOpen} disabled={disabled}>
      <S.DropdownDefault>
        <Label value={value.length === 0 ? "선택해주세요." : value} />
        <S.DropdownIcon>
          <i className="fas fa-caret-down" />
        </S.DropdownIcon>
      </S.DropdownDefault>
      <S.DropdownOption
        onClick={setValue}
        open={open}
        className="dropdown__option"
      >
        {children}
      </S.DropdownOption>
    </S.DropdownWrapper>
  );
};

export default Dropdown;
