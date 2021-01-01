import React from "react";
import * as S from "./style";

const Imagebox: React.FC<S.IImagebox> = (props) => {
  return <S.StyledImageBox {...props} />;
};

export default Imagebox;
