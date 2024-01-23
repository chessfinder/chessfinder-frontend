import React, { Component } from 'react';
import SearchBoard from './components/SearchBoard';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import GithubLink from "./components/GithubLink";
import LeftSide from "./components/LeftSide";

const GlobalStyles = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

const BoardContainer = styled.div`
  width: 100%;
  position: relative;
  display: grid;
  align-items: flex-start;
  gap: 24px;
  padding: 24px;
  overflow-x: hidden;
  
  @media(min-width: 1140px) {
    grid-template-columns: 1fr 3fr;
  }
  
  @media(max-width: 768px) {
    padding: 10px;
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
      <BoardContainer>
        <GlobalStyles />
        <LeftSide />
        <SearchBoard/>
        <GithubLink />
      </BoardContainer>
    );
  }
}

export default App;
