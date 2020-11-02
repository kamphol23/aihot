import React from "react";
import styled from "styled-components";
import * as Img from "../shared/images/img";

const Wrapper = styled.div`
  padding: 60px 50px 60px 50px;
  text-align: center;
`;
const Container = styled.div`
  justify-content: space-around;
  display: flex;
  margin: 0 0 50px 0;
  &:hover {
    cursor: pointer;
  }
`;

const ImgaeText = styled.div`
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: 0.5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  padding: 20px 0 20px 0;
  text-align: center;
  letter-spacing: 1px;
`;

const ImageContainer = styled.div`
  width: 25rem;
  height: 15.625rem;
  position: relative;

  &:hover ${ImgaeText} {
    opacity: 1;
    transition: 0.75s;
  }
`;

const Title = styled.h1`
  font-weight: 100;
  color: ${(props) => props.theme.blue};
  font-size: 4rem;
`;

const Images = styled.img`
  height: 100%;
  width: 100%;
`;

const ImageDisplay = () => {
  return (
    <Wrapper>
      <Title> Våra tjänster</Title>
      <Container>
        <ImageContainer>
          <Images src={Img.ByggaHus} />
          <ImgaeText> Bygga hus</ImgaeText>
        </ImageContainer>
        <ImageContainer>
          <Images src={Img.Plans} />
          <ImgaeText> Arkitektur</ImgaeText>
        </ImageContainer>

        <ImageContainer>
          <Images src={Img.StoneFence} />
          <ImgaeText> Mur & plattsättning</ImgaeText>
        </ImageContainer>
      </Container>

      <Container>
        <ImageContainer>
          <Images src={Img.Garden} />
          <ImgaeText> Trädgårdsanläggning</ImgaeText>
        </ImageContainer>
        <ImageContainer>
          <Images src={Img.Måleri} />
          <ImgaeText> Måleri</ImgaeText>
        </ImageContainer>
        <ImageContainer>
          {" "}
          <Images src={Img.Snickeri} />
          <ImgaeText> Snickeri</ImgaeText>
        </ImageContainer>
      </Container>
    </Wrapper>
  );
};
export default ImageDisplay;
