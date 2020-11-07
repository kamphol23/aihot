import React from "react";
import styled from "styled-components";

const Links = styled.div`
  color: ${(props) => props.theme.blue};

  &:hover {
    color: ${(props) => props.theme.orange};
     cursor: pointer;
        li{  visibility: visible;
          opacity: 1;
          display:block


      }
  }

    Li{
        list-style-type: none;
        opacity: 1;
        transition: all 0.5s ease;
        margin-top: 1rem;
        display:none;
        background-color:  ${(props) => props.theme.white};
        margin: 0;
        padding: 10px 10px 10px 0;




    {


    a {
        color:${(props) => props.theme.blue}
        text-decoration: none;

    }
`;

const DropdownMenu = () => {
  return (
    <div>
      <Links>
        Våra tjänster
        <li>
          <a href="#">Sub-1</a>
        </li>
        <li>
          <a href="#">Sub-2</a>
        </li>
        <li>
          <a href="#">Sub-3</a>
        </li>
      </Links>
    </div>
  );
};

export default DropdownMenu;
