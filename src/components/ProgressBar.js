import React, { Component } from 'react';

class ProgressBar extends Component {
  render() {
    const { progress } = this.props;

    const progressBarStyle = {
      width: `${progress}%`,
      height: '100%',
      paddingInline: `${progress === 0 ? '0px' : '8px'}`,
      background: 'linear-gradient(to right, #e5405e 0%, #ffdb3a 45%, #3fffa2 100%)',
      borderRadius: '32px',
    };

    return (
      <div style={progressBarContainerStyles}>
        <div style={progressBarStyles}>
          <div style={progressBarStyle} />
        </div>
        <div style={progressLabelStyles}>{progress}%</div>
      </div>
    );
  }
}

export default ProgressBar;

const progressBarContainerStyles = {
  position: 'relative',
  marginBlock: '16px'
}

const progressBarStyles = {
  width: '100%',
  height: '20px',
  display: 'flex',
  background: 'rgba(0,0,0, .1)',
  borderRadius: '25px',
}

const progressLabelStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}