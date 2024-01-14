import React, { Component } from 'react';
import SearchBoard from './components/SearchBoard';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import logo from './img/logo.png';
import deletePng from './img/delete.png';
import unknownPng from './img/unknown.png';
import occupiedPng from './img/occupied.png';
import githubSvg from './img/github.svg';

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const BoardContainer = styled.div`
  width: 100%;
  display: grid;
  align-items: flex-start;
  gap: 24px;
  
  @media(min-width: 1140px) {
    grid-template-columns: 1fr 3fr;
  }
`;

const Aside = styled.aside`
  margin: 24px;
`;

const LogoImage = styled.img`
  width: 160px;
  height: auto;
  margin-bottom: 40px;
`;

const List = styled.ul`
  padding-left: 0;
  list-style-type: none;
`;

const ListImage = styled.img`
  width: 25px;
  margin-right: 10px;
`

const GithubLink = styled.a`
  position: fixed;
  top: 10px;
  right: 10px;
  width: 30px;
  transform: scale(1);
  transition: transform .25s linear;

  img {
    width: 100%;
    object-fit: contain;
  }
  
  &:hover {
    transform: scale(1.1);
  }
`;

class App extends Component {
  state = {
    showCustomizedBoard: false,
    showWithMoveValidation: false,
    showRandomVsRandomGame: false,
    showPlayRandomMoveEngine: false,
    showAllowDragFeature: false,
    showPrestoChango: false,
    showUndoMove: false,
    showSpareOnDrop: false
  };

  render() {
    return (
      <BoardContainer className="app">
        <GlobalStyles />
        <Aside>
          <LogoImage src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
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
        </Aside>
        <SearchBoard/>

        <GithubLink href="https://github.com/chessfinder/chessboardjsx" target="_blank" rel="noopener noreferrer">
          <img src={githubSvg} alt="github"/>
        </GithubLink>
      </BoardContainer>
    );
  }
}

export default App;
