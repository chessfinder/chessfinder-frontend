import React, {Component} from 'react';
import styled from 'styled-components';

const MatchedGameListWrapper = styled.div`
  height: 420px;
  overflow-y: auto;
  padding-inline: 16px;
  margin-bottom: 16px;

  @media(max-width: 768px) {
    height: auto;
    max-height: 420px;
  }
`;

const MatchedGameList = styled.ol`
  list-style-type: none;
  counter-reset: custom;
  padding-left: 0;
  text-align: left;
`;

const MatchedGameListItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  counter-increment: custom;
  padding-block: 6px;
  margin-bottom: 15px;
  background-color: #e2e2e2;
  border-radius: 4px;
  transition: background-color .25s linear;

  &::before {
    content: counters(custom, ".") " ";
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: -10px;
    color: #ffffff;
    background-color: #769954;
    border-radius: 50%;
    border: 5px solid #e2e2e2;
    transform: scale(1);
    transition: border .25s linear;
  }
  
  &:hover {
    background-color: #d6d2d2;
    
    &::before {
      border-color: #d6d2d2;
      transform: scale(1.2);
    }
  }
`;

const MatchedGameLink = styled.a`
  padding-left: 30px;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #4c4a4a;
`;

class MatchedGames extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { matchedGames } = this.props;

    return (
      <MatchedGameListWrapper>
        <MatchedGameList>
          {matchedGames.map((game, index) => (
            <React.Fragment key={index}>
              <MatchedGameListItem>
                <MatchedGameLink href={game} target="_blank">
                  {game}
                </MatchedGameLink>
              </MatchedGameListItem>
            </React.Fragment>
          ))}
        </MatchedGameList>
      </MatchedGameListWrapper>
    );
  }
}

export default MatchedGames;
