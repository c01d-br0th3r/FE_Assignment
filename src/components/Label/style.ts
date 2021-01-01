import styled from "styled-components";

export interface ILabelProps {
  size?: string;
  weight?: string;
  padding?: string;
  margin?: string;
  color?: string;
  value?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  id?: string;
}

export const LabelWrapper = styled.div<ILabelProps>`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;
