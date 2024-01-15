import React, { Component } from 'react';
import styled  from 'styled-components';
import githubSvg from "../img/github.svg";

const Github = styled.a`
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

class GithubLink extends Component {
  render() {
    return (
        <Github href="https://github.com/chessfinder/chessboardjsx" target="_blank" rel="noopener noreferrer">
            <img src={githubSvg} alt="github"/>
        </Github>
    );
  }
}

export default GithubLink;
