import React, { Component } from 'react';
import styled  from 'styled-components';
import buyMeACoffeePng from "../img/bmc-button.png";

const BuyMeACoffeeButton = styled.a`
  height: 40px;
  margin-top: 10px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

class BuyMeACoffee extends Component {
  render() {
    return (
        <BuyMeACoffeeButton href="https://www.buymeacoffee.com/chessfinder" target="_blank" rel="noopener noreferrer">
            <img src={buyMeACoffeePng} alt="github"/>
        </BuyMeACoffeeButton>
    );
  }
}

export default BuyMeACoffee;
