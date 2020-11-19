import React from "react";
import styled from "styled-components";

const Links = styled.ul`
  padding: 0 0 0 0;
  margin: 0 0 0 0;


    Li{
        list-style-type: none;
        text-align:left;
        opacity: 1;
        transition: all 0.5s ease;
        display:none;
        background-color:  ${(props) => props.theme.white};
        margin: 0;
        padding: 0 0 0 1.2rem;
        height: 40px;

    {

        &:hover {
            color: ${(props) => props.theme.orange};
            cursor: pointer;
                li{
                    visibility: visible;
                    opacity: 1;
                    display:block


            }
        }
    }

  p{
      margin: 0;
      padding: 0 0 20px 0;
  }

  a {
      color:${(props) => props.theme.blue}
      text-decoration: none;
  }

`;

const DropdownMenu = () => {
  return (
    <div>
      <Links>
        <p> Våra tjänster </p>
        <li>
          <a href="#">Bygga hus</a>
        </li>
        <li>
          <a href="#">Arkitektur</a>
        </li>
        <li>
          <a href="#">Mur & plattsättning</a>
        </li>
        <li>
          <a href="#">Trädgårdsanläggning</a>
        </li>
        <li>
          <a href="#">Måleri</a>
        </li>
        <li>
          <a href="#">Snickeri</a>
        </li>
      </Links>
    </div>
  );
};

export default DropdownMenu;
