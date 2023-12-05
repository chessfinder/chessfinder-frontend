import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from "react-redux";
import {toggleDeleteMode, togglePopup} from "../redux/actions";
import Chessboard from '../Chessboard';
import { objToFen } from "../Chessboard/helpers";
import {CHESSBOARD_PLATFORM, DEFAULT_FEN, PIECE_FROM_SPARE, squareStates, STATUSES} from "../Chessboard/Constants";
import deleteSvg from "../img/delete.svg";
import { MAKE_REQUEST } from "../helpers/makeRequest";
import Popup from "./Popup";
import ProgressBar from "./ProgressBar";

class SearchBoard extends Component {
  state = {
    fen: DEFAULT_FEN,
    selectedSquare: null,
    inputData: '',
    statusId: null,
    downloadId: null,
    downloadGames: null,
    popupMessage: ''
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

  sendRequestHandler = async () => {
    const { inputData } = this.state;
    const platform = CHESSBOARD_PLATFORM;

    try {
      const downLoadGamesRequestData = { username: inputData, platform };
      const { downloadId } = await MAKE_REQUEST('faster/game', 'post', downLoadGamesRequestData);

      this.setState({ downloadId });

      if (downloadId) {
        const downloadGamesRequestData = `faster/game?downloadId=${downloadId}`;
        const downloadGames = await MAKE_REQUEST(downloadGamesRequestData, 'get');

        this.setState({ downloadGames, popupMessage: '' });

        this.props.togglePopup('success');

      }
    } catch (error) {

      this.props.togglePopup('failed');
      this.setState({ popupMessage: error.data.msg })

    }
  };



  render() {
    const { fen, selectedSquare, popupMessage, downloadGames } = this.state;
    const { isDeleteMode, showPopup } = this.props;

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
                 onChange={(e) => this.setState({ inputData: e.target.value })}
          />
          <button onClick={this.sendRequestHandler} style={buttonStyles}>
            Send Request
          </button>
        </div>

        {showPopup && popupMessage &&
          <Popup>
            <h2>{popupMessage}</h2>
          </Popup>
        }

        {showPopup && downloadGames &&
          <>
            <Popup>
              <ProgressBar progress={downloadGames.done / downloadGames.total * 100} />
            </Popup>
          </>

        }
        
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pieceInfo: state.pieceInfo,
  isDeleteMode: state.isDeleteMode,
  showPopup: state.showPopup
});

const mapDispatchToProps = (dispatch) => ({
  toggleDeleteMode: () => dispatch(toggleDeleteMode()),
  togglePopup: (popupStatus) => dispatch(togglePopup(popupStatus))
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
