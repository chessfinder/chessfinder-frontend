import React, { Component } from 'react';
import SearchBoard from './components/SearchBoard';
import styled from 'styled-components';

const BoardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw
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
        <SearchBoard/>
      </BoardContainer>
    );
  }
}

export default App;
