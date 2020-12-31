import styled from "styled-components";

export interface ICheckboxProps {
  checked?: boolean;
  setChecked?: React.MouseEventHandler<HTMLElement>;
  id?: string;
}

export const StyledCheckbox = styled.div<ICheckboxProps>`
  border: 1px solid #c2c2c2;
  width: 12px;
  height: 12px;
  cursor: pointer;
  background-color: ${(props) => (props.checked ? "#F94C4D" : "#FFF")};
  transition: background-color 0.2s ease-in-out;
`;
