import React, { Component } from 'react';
import styled  from 'styled-components';

const Ribbon = styled.div`
  position: absolute;
  top: 30px;
  right: -64px;
  overflow: hidden;
  white-space: nowrap;
  transform: rotate(45deg);
  background-color: #769954;
  box-shadow: 0 0 10px #888;

  a {
    display: block;
    padding: 8px 50px;
    margin: 1px 0;
    font: bold 81.25% 'Helvetica Neue', Helvetica, Arial, sans-serif;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 0 5px #444;
    color: #ffffff;
    border: 1px dashed #bce199;
  }
  
  @media(max-width: 676px) {
    top: 28px;
    right: -60px;
    
    a {
      padding: 4px 50px;
      font-size: 70%;
    }
  }
`;

class GithubLink extends Component {
  render() {
    return (
      <Ribbon className="ribbon">
        <a href="https://github.com/chessfinder/chessboardjsx">Fork me on GitHub</a>
      </Ribbon>
    );
  }
}

export default GithubLink;
