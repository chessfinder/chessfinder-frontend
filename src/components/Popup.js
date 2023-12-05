import React, { Component } from 'react';
// import ProgressBar from "./ProgressBar";
import {Close} from "./svgIcons/Close";
import {STATUSES} from "../Chessboard/Constants";
import {connect} from "react-redux";
import {toggleDeleteMode, togglePopup} from "../redux/actions";

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
    const { showPopup, popupStatus } = this.props;

    return (
      showPopup && (
        <div style={popupOverlay}>
          <div style={popupStyles}>
            <div style={popupStatus === 'failed' ? popupHeaderStyles(STATUSES.failed) : popupStatus === 'warning' ? popupHeaderStyles(STATUSES.warning) : popupHeaderStyles(STATUSES.success)}>
              <button style={popupCloseBtnStyles} onClick={() => this.props.togglePopup()}>
                <Close />
              </button>

            </div>
            <div style={popupBodyStyles}>
              {this.props.children}
            </div>
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  showPopup: state.showPopup,
  popupStatus: state.popupStatus
});

const mapDispatchToProps = (dispatch) => ({
  togglePopup: (popupStatus) => dispatch(togglePopup(popupStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(Popup);

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
  textAlign: 'center'
}

const popupHeaderStyles = backgroundColor => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '16px',
  borderRadius: '8px 8px 0 0',
  backgroundColor
});

const popupCloseBtnStyles = {
  fontSize: '18px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: '0 none'
};
