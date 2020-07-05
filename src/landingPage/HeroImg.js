import React from "react";

import styled from "styled-components";
import PrimaryText from "../shared/styled/PrimaryText";
import BigRedHouse from "../shared/images/BigRedHouse.png";

const Container = styled.div`
  padding-top: 45px;
  width: 100%;
  position: relative;
  text-align: center;
  display: flex;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.shadow};
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 2;
`;

const Rubrik = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 3rem;
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 35rem;
  left: 50%;
  top: 42%;
  transform: translate(-50%, -50%);
`;

const Button = styled.button``;
const HeroImg = () => {
  return (
    <Container>
      <Overlay></Overlay>
      <TextWrapper>
        <Rubrik>Test Text</Rubrik>
        <PrimaryText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </PrimaryText>
      </TextWrapper>
      <img src={BigRedHouse} alt="404" style={{ width: "100%" }} />
      <Button>Back</Button>
    </Container>
  );
};

export default HeroImg;
