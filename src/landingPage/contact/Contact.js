import React from "react";
import styled from "styled-components";
import Button from "../../shared/components/Button";
import * as Img from "../../shared/images/img";

const Container = styled.div`
  text-align: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  background-color: ${(props) => props.theme.shadow};
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 5%;
  text-align: center;
  z-index: 10;
`;

const Rubrik = styled.h1`
  color: ${(props) => props.theme.white};
  font-size: 3rem;
  margin-bottom: 25px;
  font-weight: bold;
`;

const InputWrapper = styled.div`
  position: absolute;
  display: flex;
  top: 200px;
  width: 100%;
  justify-content: center;
  z-index: 100;
`;

const Input = styled.input`
  width: 450px;
  height: 55px;
  background-color: ${(props) => props.theme.white};
  border: none;
  margin: 0 20px 0 20px;
  color: ${(props) => props.theme.black};
  font-size: 14px;
  line-height: 23px;
  padding: 0 0 0 20px;
`;

const TextareaWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 45%;
  z-index: 100;
`;

const ButtonStyle = styled(Button)`
  position: absolute;
  top: 75%;
  left: 78.5%;
  z-index: 100;
`;
const Contact = (props) => {
  return (
    <Container>
      <TextWrapper>
        <Rubrik>Kontakna oss idag</Rubrik>
      </TextWrapper>

      <img
        src={Img.ContactImg}
        alt="404"
        style={{
          width: "100%",
          height: "730px",
          filter: "blur(2px)",
        }}
      />
      <Overlay></Overlay>

      <InputWrapper>
        <Input placeholder="Namn" />
        <Input placeholder="E-mail" />
      </InputWrapper>
      <TextareaWrapper>
        <textarea
          rows="10"
          cols="115"
          placeholder="Meddelande"
          style={{ border: "none", padding: "20px" }}
        ></textarea>
      </TextareaWrapper>

      <ButtonStyle> Skicka</ButtonStyle>
    </Container>
  );
};

export default Contact;
