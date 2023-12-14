import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import { connect } from "react-redux";
import { setPopupStatus, toggleDeleteMode, togglePopup } from "../redux/actions";
import Chessboard from '../Chessboard';
import { CHESSBOARD_PLATFORM, DEFAULT_FEN, PIECE_FROM_SPARE, squareStates } from "../Chessboard/Constants";
import { MAKE_REQUEST } from "../helpers/makeRequest";
import Popup from "./Popup";
import ProgressBar from "./ProgressBar";
import deleteSvg from "../img/delete.svg";
import styled from 'styled-components';

const ChessboardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  position: relative 
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 67px;
`;

const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: -45px;
  transform: translateY(-50%);
  margin-top: -100px;
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  border: 3px solid transparent;
  border-radius: 8px;

  ${({ isDeleteMode }) => isDeleteMode && `
    color: #ffffff;
    border: 3px solid #ff0000;
  `}
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #808080;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid #808080;
`;

class SearchBoard extends Component {
  state = {
    fen: DEFAULT_FEN,
    selectedSquare: null,
    inputData: '',
    statusId: null,
    downloadId: null,
    downloadGames: null,
    popupMessage: '',
    progress: 0,
    hasProgressLoader: false
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

    try {
      const downLoadGamesRequestData = { username: inputData, CHESSBOARD_PLATFORM };
      const { downloadId } = await MAKE_REQUEST('faster/game', 'post', downLoadGamesRequestData);

      this.setState({ downloadId });

      if (downloadId) {
        this.props.togglePopup('warning');
        this.longPollProgress(downloadId);
      }

    } catch (error) {
      this.props.togglePopup('failed');
      this.setState({ popupMessage: error.data.msg });
    }
  };

  longPollProgress = async (downloadId, startTime = new Date().getTime()) => {
    const { showPopup } = this.props;
    const { progress } = this.state;
    const timeoutThreshold = 30000;

    try {
      const downloadGamesRequestData = `faster/game?downloadId=${downloadId}`;
      const pollResponse = await MAKE_REQUEST(downloadGamesRequestData, 'get');

      this.setState(() => ({
        downloadGames: pollResponse,
        popupMessage: '',
        progress: (pollResponse.done / pollResponse.total) * 100,
        hasProgressLoader: true
      }));

      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime >= timeoutThreshold) {

        this.setState({ popupMessage: 'Something goes wrong' });
        this.props.setPopupStatus('failed');

      } else {
        if (progress === 100) {
          console.log('progress is 100')
          this.props.setPopupStatus('success');
          this.setState({ hasProgressLoader: false });

          return;
        }

        showPopup && setTimeout(() => this.longPollProgress(downloadId, startTime), 1000);
      }

    } catch (error) {
      this.props.togglePopup('failed');
      this.setState({ popupMessage: error.data.msg });
    }
  };

  render() {
    const { fen, selectedSquare, popupMessage, progress, hasProgressLoader } = this.state;
    const { isDeleteMode, showPopup } = this.props;

    return (
      <ChessboardWrapper>
        <Col>
          <DeleteButton
            onClick={() => this.props.toggleDeleteMode()}
            isDeleteMode={isDeleteMode}
          >
            <img src={deleteSvg} alt="delete"/>
          </DeleteButton>
        </Col>

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
        <Col>
          <Input
            type="text"
            placeholder="Username"
            value={this.state.inputData}
            onChange={(e) => this.setState({ inputData: e.target.value })}
          />
          <Button onClick={this.sendRequestHandler}>
            Send Request
          </Button>
        </Col>

        {showPopup &&
          <>
            <Popup>
              { popupMessage ? <h2>{popupMessage}</h2>
                : <ProgressBar hasProgressLoader={hasProgressLoader} progress={Math.floor(progress)} />
              }
            </Popup>
          </>
        }
        
      </ChessboardWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  pieceInfo: state.pieceInfo,
  isDeleteMode: state.isDeleteMode,
  showPopup: state.showPopup,
  popupStatus: state.popupStatus
});

const mapDispatchToProps = (dispatch) => ({
  toggleDeleteMode: () => dispatch(toggleDeleteMode()),
  setPopupStatus: (status) => dispatch(setPopupStatus(status)),
  togglePopup: (popupStatus) => dispatch(togglePopup(popupStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoard);
