import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import Chessboard, {getPositionObject} from '../Chessboard';
import {objToFen} from "../Chessboard/helpers";
import {squareStates} from "../Chessboard/Constants";
import deleteSvg from "../img/delete.svg";

class SearchBoard extends Component {
  state = {
    fen: getPositionObject('start'),
    toggleDelete: false,
    selectedSquare: null,
  };

  onDrop = ({ sourceSquare, targetSquare, piece }) => {
    // TODO: check this.state.fen === 'empty' statement for later, maybe you won't need it
    if(this.state.fen === 'empty') {
      this.setState(() => ({
        fen: {
          [targetSquare]: piece
        }
      }));
    } else {
      if (sourceSquare === targetSquare) return;

      const newFen = this.state.fen
      delete newFen[sourceSquare];
      newFen[targetSquare] = piece;

      this.setState(() => {
        return {
          fen: newFen,
        }});
    }
  };

  handleMouseOverSquare = (square) => {
    if(this.state.toggleDelete) {
      this.setState({ selectedSquare: square });
    }
  };

  handleMouseOutSquare = () => {
    if(this.state.toggleDelete) {
      this.setState({ selectedSquare: null });
    }
  };

  onSquareClick = (square) => {
    if(this.state.toggleDelete) {
      const newFen = { ...this.state.fen };
      newFen[square] = squareStates.EMPTY;

      this.setState(() => {
        return {
          fen: newFen,
        }});
    }
  }

  deleteHandler = () => {
    this.onSquareClick();

    this.setState((prevState) => ({
      toggleDelete: !prevState.toggleDelete,
    }));

    this.setState(() => {
      return {
        fen: this.state.fen,
      }});
  }

  sendRequestHandler = () => {
    console.log(objToFen(this.state.fen), 'final fen');

    this.setState((prevState) => ({
      toggleDelete: !prevState.toggleDelete,
    }));
  }

  render() {
    const { fen, selectedSquare } = this.state;

    return (
      <div style={chessboardWrapper}>
        <div style={col}>
          <button style={{ ...deleteButtonStyle, ...(this.state.toggleDelete ? toggledStyle : {}) }}
                  onClick={this.deleteHandler}>
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
              background: 'radial-gradient(circle, #ff0000 36%, transparent 40%)',
            },
          }}
        />

        <div style={col}>
          <input type="text" placeholder="Username" style={inputStyles} />
          <button onClick={this.sendRequestHandler} style={buttonStyles}>Send Request</button>
        </div>
      </div>
    );
  }
}

export default SearchBoard;

const chessboardWrapper = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: "20px"
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
  backgroundColor: '#ff0000',
  border: '1px solid #ff0000',
}

const deleteButtonStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '5px',
  border: '1px solid #808080',
  borderRadius: '8px'
}
