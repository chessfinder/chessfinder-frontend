import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const ProgressBarWrapper = styled.div`
  position: relative;
  margin-block: 16px
`;

const ProgressText = styled.p`
  margin-bottom: 0;
  text-align: left;
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
  transform: translate(-50%, -50%);
  color: #ffffff;
`;

class ProgressBar extends Component {
  render() {
    const { progressText, progress, hasProgressLoader } = this.props;

    const ProgressInner = styled.div`
      width: ${progress}%;
      height: 100%;
      padding-inline: ${progress === 0 ? '0px' : '8px'};
      background-color: rgb(118, 153, 84);
      transition: width .5s linear;
      border-radius: 32px;
    `;

    return (
      <div>
        <ProgressText>{progressText}</ProgressText>
        <ProgressBarWrapper>
          <Progress className={hasProgressLoader ? 'progress-loading' : ''}>
            <ProgressInner />
          </Progress>
          <ProgressLabel>{progress}%</ProgressLabel>
        </ProgressBarWrapper>
      </div>
    );
  }
}

export default ProgressBar;
