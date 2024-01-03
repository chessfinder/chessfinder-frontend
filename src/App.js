import React, { Component } from 'react';
import SearchBoard from './components/SearchBoard';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const BoardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw
`;

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
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
        <SearchBoard/>
      </BoardContainer>
    );
  }
}

export default App;
