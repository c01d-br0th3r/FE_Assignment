import styled from "styled-components";

export interface IImagebox {
  src: string;
  alt: string;
  width?: string;
  height?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const StyledImageBox = styled.div<IImagebox>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-image: ${(props) => `url(${props.src})`};
  background-position: center;
  background-size: cover;
`;
