import React from "react";
import * as S from "./style";

const Label: React.FC<S.ILabelProps> = ({
  size = "16px",
  weight = "400",
  padding = "0",
  margin = "0",
  color = "#121212",
  value = "Text",
  onClick,
  id,
}) => {
  return (
    <S.LabelWrapper
      size={size}
      weight={weight}
      padding={padding}
      margin={margin}
      color={color}
      onClick={onClick}
      id={id}
    >
      {value}
    </S.LabelWrapper>
  );
};

export default Label;
