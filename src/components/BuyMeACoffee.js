import React, { Component } from 'react';
import styled  from 'styled-components';
import buyMeACoffeePng from "../img/bmc-button.png";

const BuyMeACoffeeButton = styled.a`
  width: 150px;
  position: absolute;
  right: 10px;
  bottom: 10px;
  
  img {
    width: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    position: relative;
    margin-left: auto;
  }
`;

class BuyMeACoffee extends Component {
  render() {
    return (
        <BuyMeACoffeeButton href="https://github.com/chessfinder/chessboardjsx" target="_blank" rel="noopener noreferrer">
            <img src={buyMeACoffeePng} alt="github"/>
        </BuyMeACoffeeButton>
    );
  }
}

export default BuyMeACoffee;
