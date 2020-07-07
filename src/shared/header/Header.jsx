import React from "react";
import DropdownMenu from "./DropDownMenu";

import styled from "styled-components";
import Title from "../styled/Title";

const Logo = styled.div`
  width: 50%;
  margin: auto;
  margin-left: 70px;
`;

const Wrapper = styled.div`
  width: 100%;
  min-height: 10vh;
  display: flex;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.white};
  z-index: 1000000;
`;
const Nav = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  right: 0;
  top: 2rem;
`;
const Links = styled.div`
  color: ${(props) => props.theme.blue};
  &:hover {
    color: ${(props) => props.theme.orange};
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <div>
      <Wrapper>
        <Logo>
          <Title> Allt inom hus och trädgård </Title>
        </Logo>
        <Nav>
          <Links>
            <span>Start</span>
          </Links>
          <DropdownMenu />
          <Links>
            <span> Om oss</span>
          </Links>
          <Links>
            <span>Kontakta oss</span>
          </Links>
        </Nav>
      </Wrapper>
    </div>
  );
};

export default Header;
