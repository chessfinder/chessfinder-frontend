import React, {Component} from 'react';
import styled from 'styled-components';
import logo from "../img/logo.png";
import deletePng from "../img/delete.png";
import unknownPng from "../img/unknown.png";
import occupiedPng from "../img/occupied.png";

const LogoImage = styled.img`
  width: 160px;
  height: auto;
  margin-bottom: 20px;

  @media (max-width: 576px) {
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
        <LogoImage src={logo} alt="logo"/>

        <AsideP>
          Discover and revisit your most memorable chess games with ease. Whether you're looking for that brilliant
          smothered mate, the nail-biting game where you stalemated your opponent despite being up three queens, or any
          other unique positions you've encountered, chessfinder.org is here to help.
          chessfinder.org allows you to search for games on chess.com even with partial information about the board
          position. This functionality, not available on chess.com, lets you find those unforgettable games without the
          need for precise or complete details. </AsideP>
        <List>
          <li>
            <ListImage src={deletePng} alt="delete"/>
            Mark as Uncertain: Use this when you're unsure whether a square is occupied or empty.
          </li>
          <li>
            <ListImage src={unknownPng} alt="unknown"/>
            Mark as Occupied: Use this to indicate the square is occupied by a piece, but its type and color are
            unknown.
          </li>
          <li>
            <ListImage src={occupiedPng} alt="occupied"/>
            Mark as Empty: Use this to confirm that a square is definitely empty
          </li>
        </List>
        <p>
          <strong>NO MEMORABLE GAME IS EVER FORGOTTEN!</strong>
        </p>
      </aside>
    );
  }
}

export default LeftSide;
