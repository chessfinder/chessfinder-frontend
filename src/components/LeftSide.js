import React, { Component } from 'react';
import styled  from 'styled-components';
import logo from "../img/logo.png";
import deletePng from "../img/delete.png";
import unknownPng from "../img/unknown.png";
import occupiedPng from "../img/occupied.png";

const LogoImage = styled.img`
  width: 160px;
  height: auto;
  margin-bottom: 40px;

  @media(max-width: 576px) {
    margin-bottom: 0;
  }
`;

const AsideP = styled.p`
  padding-right: 10px;
`;

const List = styled.ul`
  padding-left: 0;
  list-style-type: none;
`;

const ListImage = styled.img`
  width: 25px;
  margin-right: 10px;
`

class LeftSide extends Component {
  render() {
    return (
        <aside>
            <LogoImage src={logo} alt="logo" />

            <AsideP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </AsideP>
            <List>
                <li>
                    <ListImage src={deletePng} alt="delete"/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                    <ListImage src={unknownPng} alt="unknown"/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                    <ListImage src={occupiedPng} alt="occupied"/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
            </List>
        </aside>
    );
  }
}

export default LeftSide;
