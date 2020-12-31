import React from "react";
import styled from "styled-components";

export interface IDropdownProps {
  value?: string;
  setValue?: React.MouseEventHandler<HTMLElement>;
  open?: boolean;
  setOpen?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const DropdownWrapper = styled.div<IDropdownProps>`
  width: 260px;
  position: relative;
  cursor: pointer;
`;

export const DropdownDefault = styled.div<IDropdownProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #c2c2c2;
  padding: 8px 12px;
`;

export const DropdownIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DropdownOption = styled.div<IDropdownProps>`
  width: 260px;
  background-color: #fff;
  z-index: ${(props) => (props.open ? "10" : "-10")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  position: absolute;
  top: ${(props) => (props.open ? "42px" : "0")};
  left: 0;
  padding: 4px 12px;
  border: 1px solid #c2c2c2;
  border-top: none;
  div {
    padding: 8px 0;
    border-bottom: 1px solid #d2d2d2;
    &:last-child {
      border: none;
    }
  }
  transition: all 0.2s ease-in-out;
`;
