import React from "react";
import styled from "styled-components";
import HeroImg from "./HeroImg";

import PrimaryText from "../shared/styled/PrimaryText";

const ColorTextBox = styled.div`
  background-color: #f8f8f8;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 60px 0px 60px 0px;
`;

const TextBox = styled.div`
  width: 963px;
  line-height: 23px;
`;

const LandingPage = () => {
  return (
    <div
      style={{
        padding: "80px 0 0 0",
      }}
    >
      <HeroImg />
      <ColorTextBox>
        <TextBox>
          <PrimaryText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur
          </PrimaryText>
        </TextBox>
      </ColorTextBox>
    </div>
  );
};
export default LandingPage;
