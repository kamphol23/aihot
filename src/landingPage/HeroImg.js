import React, { Component } from "react";
import styled from "styled-components";

import Button from "../shared/components/Button";
import PrimaryText from "../shared/styled/PrimaryText";
import * as Img from "../shared/images/img";

const Container = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
  display: flex;
  height: 44rem;
  background-image: url(${Img.Wall});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Rubrik = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 4rem;
  margin-bottom: 25px;
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 35rem;
  left: 18%;
  top: 20%;
  transform: translate(-20%, -15%);
  z-index: 10;
  text-align: left;
`;

class HeroImg extends Component {
  render() {
    return (
      <Container>
        <TextWrapper>
          <Rubrik>Lorem ipsum dolor sit amet, consectetur </Rubrik>
          <PrimaryText style={{ color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </PrimaryText>
          <Button> Kontakna nu</Button>
        </TextWrapper>
      </Container>
    );
  }
}

export default HeroImg;
