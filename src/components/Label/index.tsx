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
}) => {
  return (
    <S.LabelWrapper
      size={size}
      weight={weight}
      padding={padding}
      margin={margin}
      color={color}
      onClick={onClick}
    >
      {value}
    </S.LabelWrapper>
  );
};

export default Label;
