import React from "react";
import styled from "styled-components";

import PrimaryText from "../styled/PrimaryText";
const Contianer = styled.div`
  width: 100%;
  height: 16rem;
  display: flex;
  padding: 70px 0 70px 0;
`;

const ItemWrapper = styled.div`
  color: ${(props) => props.theme.black};
  width: 100%;
  text-align: center;
`;

const TextWrapper = styled.div`
  text-align: left;
  padding-left: 35%;
  margin: 25px 0 0 0;
`;
const Rubrik = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 1px;
`;
const Footer = () => {
  return (
    <Contianer>
      <ItemWrapper>
        <Rubrik>Kontakt</Rubrik>
        <TextWrapper>
          <PrimaryText>+46 ** ** ** **</PrimaryText>
          <PrimaryText>Loremipsum@Gmail.se</PrimaryText>
          <PrimaryText>Org nr : 12345-6789 </PrimaryText>
        </TextWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <Rubrik>Tjänster</Rubrik>
        <TextWrapper
          style={{
            paddingleft: "41%",
          }}
        >
          <PrimaryText>Snickeri</PrimaryText>
          <PrimaryText>Måleri</PrimaryText>
          <PrimaryText>Renovering</PrimaryText>
          <PrimaryText>Bygga hus</PrimaryText>
          <PrimaryText>Arkitektur</PrimaryText>
          <PrimaryText>Gräs matta </PrimaryText>
        </TextWrapper>
      </ItemWrapper>
      <ItemWrapper>
        <Rubrik>Media</Rubrik>
      </ItemWrapper>
    </Contianer>
  );
};

export default Footer;
