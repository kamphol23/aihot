import React, { Component } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import styled from "styled-components";
import PrimaryText from "../shared/styled/PrimaryText";
import * as Img from "../shared/images/img";

const Container = styled.div`
  padding-top: 45px;
  width: 100%;
  position: relative;
  text-align: center;
  display: flex;
  height: 44rem;
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
const Awsbtn = styled(AwesomeSlider)`
  --slider-height-percentage: 60%;
  --slider-transition-duration: 700ms;
  --organic-arrow-thickness: 5px;
  --organic-arrow-border-radius: 30px;
  --organic-arrow-height: 50px;
  --organic-arrow-color: #ffffff;
  --control-button-width: 10%;
  --control-button-height: 25%;
  --control-button-background: transparent;
  --control-bullet-color: #ffffff;
  --control-bullet-active-color: #ee6c4d;
  --loader-bar-color: #851515;
  --loader-bar-height: 6px;
`;

class HeroImg extends Component {
  render() {
    return (
      <Container>
        <Overlay></Overlay>
        <Awsbtn>
          <div data-src={Img.BigRedHouse}>
            {" "}
            <TextWrapper>
              <Rubrik>Lorem ipsum </Rubrik>
              <PrimaryText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </PrimaryText>
            </TextWrapper>
          </div>
          <div data-src={Img.Wall}>
            <TextWrapper>
              <Rubrik>Lorem ipsum </Rubrik>
              <PrimaryText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </PrimaryText>
            </TextWrapper>
          </div>
          <div data-src={Img.NewHouse}>
            <TextWrapper>
              <Rubrik>Lorem ipsum </Rubrik>
              <PrimaryText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </PrimaryText>
            </TextWrapper>
          </div>
          <div data-src={Img.SwedisHouse}>
            <TextWrapper>
              <Rubrik>Lorem ipsum </Rubrik>
              <PrimaryText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ullamco laboris nisi ut aliquip ex ea
                commodo consequat.
              </PrimaryText>
            </TextWrapper>
          </div>
        </Awsbtn>
      </Container>
    );
  }
}

export default HeroImg;
