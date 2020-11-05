import React from "react";
import styled from "styled-components";

import PrimaryText from "../styled/PrimaryText";

const Contianer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 16rem;
  padding: 40px 0 40px 0;
`;

const ItemWrapper = styled.div`
  color: ${(props) => props.theme.black};
`;

const Rubrik = styled.h1`
  font-size: 1.5rem;
  letter-spacing: 1px;
`;

const Unlist = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const List = styled.li`
  margin: 20px 0 20px 0;
`;

const HrDiv = styled.div`
  padding: 0 70px 0 70px;
`;
const Footer = () => {
  return (
    <div>
      <Contianer>
        <ItemWrapper>
          <Rubrik>Kontakt</Rubrik>

          <Unlist>
            <List>
              {" "}
              <PrimaryText>+46 ** ** ** **</PrimaryText>
            </List>
            <List>
              <PrimaryText>Loremipsum@Gmail.se</PrimaryText>
            </List>
            <List>
              <PrimaryText>Org nr : 12345-6789 </PrimaryText>
            </List>
          </Unlist>
        </ItemWrapper>
        <ItemWrapper>
          <Rubrik>Tjänster</Rubrik>
          <Unlist>
            <List>
              {" "}
              <PrimaryText>Bygga hus</PrimaryText>
            </List>
            <List>
              <PrimaryText>Arkitektur</PrimaryText>
            </List>
            <List>
              <PrimaryText>Mur & plattsätting</PrimaryText>
            </List>
            <List>
              <PrimaryText>Trädgårdsanläggning</PrimaryText>
            </List>
            <List>
              <PrimaryText>Måleri</PrimaryText>
            </List>
            <List>
              <PrimaryText>Snickeri</PrimaryText>
            </List>
          </Unlist>
        </ItemWrapper>
        <ItemWrapper>
          <Rubrik>Media</Rubrik>
          <Unlist>
            <List>
              <PrimaryText>Facebook</PrimaryText>
            </List>
            <List>
              <PrimaryText>Instagram</PrimaryText>
            </List>
          </Unlist>
        </ItemWrapper>
      </Contianer>
      <hr />
      <HrDiv>
        <PrimaryText> Made by Kamphol Taeng-Iam</PrimaryText>
      </HrDiv>
    </div>
  );
};

export default Footer;
