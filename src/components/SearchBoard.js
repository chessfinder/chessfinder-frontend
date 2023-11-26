import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from "react-redux";
import { toggleDeleteMode } from "../redux/actions";
import axios from 'axios';
import Chessboard from '../Chessboard';
import { objToFen } from "../Chessboard/helpers";
import {DEFAULT_FEN, PIECE_FROM_SPARE, squareStates} from "../Chessboard/Constants";
import Popup from "./Popup";
import deleteSvg from "../img/delete.svg";

class SearchBoard extends Component {
  state = {
    fen: DEFAULT_FEN,
    selectedSquare: null,
    showPopup: false,
    message: 'Hello from ParentComponent',
    inputData: '',
    responseData: null
  };

  onDrop = ({sourceSquare, targetSquare, piece}) => {

    if (sourceSquare === targetSquare) return;

    const newFen = {...this.state.fen};

    if(sourceSquare !== PIECE_FROM_SPARE) {
      newFen[sourceSquare] = squareStates.UNKNOWN;
    }

    newFen[targetSquare] = piece;

    this.setState(() => {
      return {
        fen: newFen,
      }
    });
  };

  handleMouseOverSquare = (square) => {
    const { isDeleteMode } = this.props;

    if (isDeleteMode) {
      this.setState({ selectedSquare: square });
    }
  };

  handleMouseOutSquare = () => {
    const { isDeleteMode } = this.props;

    if (isDeleteMode) {
      this.setState({selectedSquare: null});
    }
  };

  onSquareClick = (square) => {
    const { isDeleteMode } = this.props;
    const { isSparePiece, sparePiece } = this.props.pieceInfo;

    if (isDeleteMode) {
      const newFen = {...this.state.fen};
      newFen[square] = squareStates.EMPTY;

      this.setState(() => {
        return {
          fen: newFen,
        }
      });
    }

    if(isSparePiece) {
      const newFen = {...this.state.fen};
      newFen[square] = sparePiece;

      this.setState(() => {
        return {
          fen: newFen,
        }
      });

    }
  }

  handleChange = (e) => {
    this.setState({ inputData: e.target.value });
  }

  sendRequestHandler = () => {
    const newFen = objToFen(this.state.fen);

    const data = {
      newFen,
      inputData: this.state.inputData
    }

    axios.get('https://bi0plb9pba.execute-api.us-east-1.amazonaws.com/api/faster/board', {
      data
    })
      .then(response => {
        console.log(response.data, 'response');
      })
      .catch(error => {
        console.error(error);
      });

    this.setState(() => ({ showPopup: true }));
  }

  togglePopup = () => {
    this.setState({ showPopup: !this.state.showPopup });
  }

  render() {
    const { fen, selectedSquare } = this.state;
    const { isDeleteMode } = this.props

    return (
      <div style={chessboardWrapper}>
        <div style={col}>
          <button style={{...deleteButtonStyle, ...(isDeleteMode ? toggledStyle : {})}}
                  onClick={() => this.props.toggleDeleteMode()}>
            <img src={deleteSvg} alt="delete"/>
          </button>
        </div>

        <Chessboard
          sparePieces
          position={fen}
          dropOffBoard="trash"
          onDrop={this.onDrop}
          onSquareClick={this.onSquareClick}
          onMouseOverSquare={this.handleMouseOverSquare}
          onMouseOutSquare={this.handleMouseOutSquare}
          squareStyles={{
            [selectedSquare]: {
              boxShadow: `${isDeleteMode ? 'inset 0 0 1px 4px red' : 'inset 0 0 1px 4px yellow'}`
            }
          }}
          boardStyle={{
            borderRadius: '5px',
            boxShadow: `0 5px 15px rgba(0, 0, 0, 0.5)`
          }}
        />
        <div style={col}>
          <input type="text"
                 placeholder="Username"
                 style={inputStyles}
                 value={this.state.inputData}
                 onChange={this.handleChange}
          />
          <button onClick={this.sendRequestHandler} style={buttonStyles}>
            Send Request
          </button>
        </div>

        <Popup showPopup={this.state.showPopup} togglePopup={this.togglePopup} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pieceInfo: state.pieceInfo,
  isDeleteMode: state.isDeleteMode
});

const mapDispatchToProps = (dispatch) => ({
  toggleDeleteMode: () => dispatch(toggleDeleteMode()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoard);

const chessboardWrapper = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: "20px",
  position: 'relative'
}

const col = {
  display: 'flex',
  flexDirection: 'column',
  marginBlock: '67px'
}

const inputStyles = {
  marginBottom: '10px',
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #808080'
}

const buttonStyles = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #808080'
}

const toggledStyle = {
  color: '#ffffff',
  border: '3px solid #ff0000'
}

const deleteButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '-45px',
  transform: 'translateY(-50%)',
  marginTop: '-100px',
  padding: '5px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: '3px solid transparent',
  borderRadius: '8px'
}
