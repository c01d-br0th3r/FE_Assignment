import Label from "components/Label";
import React from "react";
import * as S from "./style";

const Dropdown: React.FC<S.IDropdownProps> = ({
  setValue,
  open = false,
  setOpen,
  children,
  disabled = false,
  className,
  defaultValue = "선택해주세요",
}) => {
  return (
    <S.DropdownWrapper
      onClick={setOpen}
      disabled={disabled}
      className={className}
    >
      <S.DropdownDefault>
        <Label value={defaultValue} weight="500" />
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
