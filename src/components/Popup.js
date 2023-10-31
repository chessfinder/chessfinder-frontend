import React, { Component } from 'react';
import ProgressBar from "./ProgressBar";

class Popup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    // this.progressInterval = setInterval(() => {
    //   if (this.state.progress < 100) {
    //     this.setState((prevState) => ({ progress: prevState.progress + 1 }));
    //   } else {
    //     clearInterval(this.progressInterval);
    //   }
    // }, 100);
  }

  componentWillUnmount() {
    // clearInterval(this.progressInterval);
  }

  render() {
    const { showPopup } = this.props;

    return (
      showPopup && (
        <div style={popupOverlay}>
          <div style={popupStyles}>
            <div style={popupHeaderStyles}>
              <button style={popupCloseBtnStyles}
                      onClick={() => this.setState({ showPopup: false })}
              >
                x
              </button>

              {console.log(showPopup)}
            </div>
            <div style={popupBodyStyles}>
              <ProgressBar progress={this.state.progress} />
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Popup;

const popupOverlay = {
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#ffffff',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: '99'
}

const popupStyles = {
  minWidth: '400px',
  color: '#000000',
  backgroundColor: '#ffffff',
  borderRadius: '8px'
}

const popupBodyStyles = {
  padding: '16px',
}

const popupHeaderStyles = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '16px',
}

const popupCloseBtnStyles = {
  fontSize: '18px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: '0 none'
}
