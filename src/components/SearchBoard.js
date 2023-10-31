import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import Chessboard from '../Chessboard';
import {objToFen} from "../Chessboard/helpers";
import {DEFAULT_FEN, PIECE_FROM_SPARE, squareStates} from "../Chessboard/Constants";
import deleteSvg from "../img/delete.svg";
import Popup from "./Popup";
import axios from 'axios';


class SearchBoard extends Component {
  state = {
    fen: DEFAULT_FEN,
    toggleDelete: false,
    selectedSquare: null,
    showPopup: false,
    message: 'Hello from ParentComponent',
    inputData: '',
    responseData: null,
  };

  onDrop = ({sourceSquare, targetSquare, piece}) => {
    this.setState({toggleDelete: false});

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
    if (this.state.toggleDelete) {
      this.setState({selectedSquare: square});
    }
  };

  handleMouseOutSquare = () => {
    if (this.state.toggleDelete) {
      this.setState({selectedSquare: null});
    }
  };

  onSquareClick = (square) => {
    if (this.state.toggleDelete) {
      const newFen = {...this.state.fen};
      newFen[square] = squareStates.EMPTY;

      this.setState(() => {
        return {
          fen: newFen,
        }
      });
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
      }
    });
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
      params: data
    })
      .then(response => {
        console.log(response.data, 'response');
      })
      .catch(error => {
        console.error(error);
      });

    this.setState((prevState) => ({
      toggleDelete: !prevState.toggleDelete,
      showPopup: true
    }));

  }

  render() {
    const {fen, selectedSquare} = this.state;

    return (
      <div style={chessboardWrapper}>
        <div style={col}>
          <button style={{...deleteButtonStyle, ...(this.state.toggleDelete ? toggledStyle : {})}}
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

        <Popup showPopup={this.state.showPopup} />
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
