import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 1080px;
  padding: 32px;
`;

const Layout: React.FC<{}> = ({ children }) => (
  <Wrapper>
    <Container>{children}</Container>
  </Wrapper>
);

export default Layout;
