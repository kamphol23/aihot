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

    li{
        visibility: hidden;
        opacity: 0;
        position: relative;
        transition: all 0.5s ease;
        margin-top: 1rem;
        display:none;
        text-decoration: none;
        
    {
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
