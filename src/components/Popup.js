import React, { Component } from 'react';
import { connect } from "react-redux";
import { Close } from "./svgIcons/Close";
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99
`;

const PopupStyles = styled.div`
  color: #000000;
  background-color: #ffffff;
  border-radius: 8px;

  @media(min-width: 768px) {
    min-width: 440px;
  }

  @media(max-width: 768px) {
    width: 90%;
    margin: 24px;
  }
`;

const PopupBody = styled.div`
  padding: 8px 16px;
  text-align: center;
`;

const PopupCloseBtn = styled.button`
  font-size: 18px;
  cursor: pointer;
  background-color: transparent;
  border: 0 none;
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
  border-radius: 8px 8px 0 0;
  background-color: ${({ backgroundcolor }) => backgroundcolor};
`;

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  render() {
    const { showPopup, onClose } = this.props;

    return (
      showPopup && (
        <PopupOverlay>
          <PopupStyles>
            <PopupHeader>
              <PopupCloseBtn onClick={onClose}>
                <Close />
              </PopupCloseBtn>
            </PopupHeader>
            <PopupBody>
              {this.props.children}
            </PopupBody>
          </PopupStyles>
        </PopupOverlay>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  showPopup: state.showPopup
});

export default connect(mapStateToProps, null)(Popup);
