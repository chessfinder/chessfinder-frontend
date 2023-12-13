import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const ProgressBarContainer = styled.div`
  position: relative;
  margin-block: 16px
`;

const LoadingAnimation = keyframes`
  0% {
    left: -50%;
  }

  100% {
    left: 150%;
  }
`;

const Progress = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  position: relative;
  overflow: hidden;
  background: rgba(0,0,0, .1);
  border-radius: 25px;
  
  &.progress-loading::after {
    content: "";
    width: 50%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(90deg, #fff5, rgba(230, 230, 230, 0.891));
    animation: ${LoadingAnimation} 1.5s infinite;
    border-radius: 25px;
  }
`;

const ProgressLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) 
`;

class ProgressBar extends Component {
  render() {
    const { progress, hasProgressLoader } = this.props;

    const ProgressInner = styled.div`
      width: ${progress}%;
      height: 100%;
      padding-inline: ${progress === 0 ? '0px' : '8px'};
      background: linear-gradient(to right, #e5405e 0%, #ffdb3a 45%, #3fffa2 100%);
      border-radius: 32px;
    `;

    return (
      <ProgressBarContainer>
        <Progress className={hasProgressLoader ? 'progress-loading' : ''}>
          <ProgressInner />
        </Progress>
        <ProgressLabel>{progress}%</ProgressLabel>
      </ProgressBarContainer>
    );
  }
}

export default ProgressBar;
