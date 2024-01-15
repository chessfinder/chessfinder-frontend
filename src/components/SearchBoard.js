import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {connect} from "react-redux";
import {setPopupStatus, toggleDeleteMode, togglePopup} from "../redux/actions";
import Chessboard from '../Chessboard';
import {
  CHESSBOARD_PLATFORM,
  DEFAULT_FEN,
  PIECE_FROM_SPARE,
  SEARCH_GAMES_STATUSES,
  squareStates
} from "../Chessboard/Constants";
import {MAKE_REQUEST} from "../helpers/makeRequest";
import {objToFen} from "../Chessboard/helpers";
import Popup from "./Popup";
import ProgressBar from "./ProgressBar";
import deletePng from "../img/delete.png";
import styled from 'styled-components';
import MatchedGames from "./MatchedGames";

const ChessboardWrapper = styled.div`
  width: 70%;
  position: relative;
  display: flex;
  margin: auto;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;

const ChessboardInnerWrapper = styled.div`
  display: flex;
`;

const Col = styled.div`
  width: 100%;
  max-width: 180px;
  display: flex;
  flex-direction: column;
  margin-block: 85px;

  @media (max-width: 768px) {
    width: unset;
    margin-block: 0 40px;
  }
`;

const DeleteButton = styled.button`
  width: 60px;
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  left: -70px;
  transform: translateY(-50%);
  margin-top: -100px;
  padding: 5px;
  cursor: pointer;
  background-color: transparent;
  border: 3px solid transparent;
  border-radius: 8px;
  
  img {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    width: 48px;
    top: 14px;
    left: 50%;
    margin-left: -30px;
    margin-top: unset;
    transform: translateX(-50%);
  }

  ${({isDeleteMode}) => isDeleteMode && `
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
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: #769954;
  border: 1px solid #769954;
  border-radius: 8px;
  
  &:hover {
    background-color: #617e45;
  }
`;

class SearchBoard extends Component {
  state = {
    fen: DEFAULT_FEN,
    selectedSquare: null,
    inputData: '',
    statusId: null,
    downloadId: null,
    matchedGames: null,
    popupMessage: '',
    downloadingProgress: 0,
    searchingProgress: 0,
    hasProgressLoader: false
  };

  onDrop = ({sourceSquare, targetSquare, piece}) => {

    if (sourceSquare === targetSquare) return;

    const newFen = {...this.state.fen};

    if (sourceSquare !== PIECE_FROM_SPARE) {
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
    const {isDeleteMode} = this.props;

    if (isDeleteMode) {
      this.setState({selectedSquare: square});
    }
  };

  handleMouseOutSquare = () => {
    const {isDeleteMode} = this.props;

    if (isDeleteMode) {
      this.setState({selectedSquare: null});
    }
  };

  onSquareClick = (square) => {
    const {isDeleteMode} = this.props;
    const {isSparePiece, sparePiece} = this.props.pieceInfo;

    if (isDeleteMode) {
      const newFen = {...this.state.fen};
      newFen[square] = squareStates.EMPTY;

      this.setState(() => {
        return {
          fen: newFen,
        }
      });
    }

    if (isSparePiece) {
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
    const {inputData} = this.state;

    try {
      const downLoadGamesRequestData = {username: inputData, CHESSBOARD_PLATFORM};
      const {downloadId} = await MAKE_REQUEST('faster/game', 'post', downLoadGamesRequestData);

      this.setState({downloadId});

      if (downloadId) {
        this.props.togglePopup('warning');

        await this.DownloadingLongPollProgress(downloadId);
      }

    } catch (error) {
      this.props.togglePopup('failed');
      this.setState({popupMessage: error.data.msg});
    }
  };

  DownloadingLongPollProgress = async (downloadId) => {
    const {showPopup} = this.props;
    const {downloadingProgress} = this.state;
    const timeoutThreshold = 90000;

    try {
      const downloadGamesRequestData = `faster/game?downloadId=${downloadId}`;
      const downloadingPollResponse = await MAKE_REQUEST(downloadGamesRequestData, 'get');

      const total = downloadingPollResponse.total;
      const done = downloadingPollResponse.done;
      const lastDownloadedAt = Date.parse(downloadingPollResponse.lastDownloadedAt);

      const downloadingProgressCalc = total !== 0 ? (done / total) * 100 : 0;

      this.setState(() => ({
        popupMessage: '',
        downloadingProgress: downloadingProgressCalc,
        hasProgressLoader: true
      }));

      const currentTime = new Date().getTime();

      console.log(currentTime, 'currentTime')
      const elapsedTime = currentTime - lastDownloadedAt;

      if (elapsedTime >= timeoutThreshold && downloadingPollResponse.pending > 0) {
        this.setState({popupMessage: 'Search timeout'});
        this.props.setPopupStatus('failed');
      } else {
        if (downloadingProgress === 100) {
          this.props.setPopupStatus('success');
          this.setState({hasProgressLoader: false});

          await this.SearchingLongPollProgress();

          return;
        }

        showPopup && setTimeout(() => this.DownloadingLongPollProgress(downloadId), 6000);
      }

    } catch (error) {
      this.props.togglePopup('failed');
      this.setState({popupMessage: error.data.msg});
    }
  };

  SearchingLongPollProgress = async () => {
    const {inputData, fen} = this.state;
    const timeoutThreshold = 90000;

    try {
      const newObjToFen = objToFen(fen);
      const boardData = {username: inputData, platform: CHESSBOARD_PLATFORM, board: newObjToFen};

      const {searchId} = await MAKE_REQUEST('faster/board', 'post', boardData);

      if (searchId) {
        await this.checkSearchStatus(searchId, timeoutThreshold);
      }
    } catch (error) {
      this.props.togglePopup('failed');
      this.setState({popupMessage: error.data.msg});
    }
  };

  checkSearchStatus = async (searchId, timeoutThreshold) => {
    try {
      const checkSearchStatusRequestData = `faster/board?searchId=${searchId}`;
      const {total, examined, status, matched, lastExaminedAtString} = await MAKE_REQUEST(checkSearchStatusRequestData, 'get');

      this.setState(() => ({
        popupMessage: '',
        searchingProgress: (examined / total) * 100
      }));
      const lastDownloadedAt = Date.parse(lastExaminedAtString);
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - lastDownloadedAt;

      if (elapsedTime >= timeoutThreshold && status === SEARCH_GAMES_STATUSES.inProgress) {
        this.setState({popupMessage: 'Search timeout'});
        this.props.setPopupStatus('failed');
      } else {
        if (status === SEARCH_GAMES_STATUSES.searchedPartially || status === SEARCH_GAMES_STATUSES.searchedAll) {
          this.props.setPopupStatus('success');
          this.setState({
            matchedGames: matched
          });

          return;
        }

        setTimeout(() => this.checkSearchStatus(searchId, timeoutThreshold), 6000);

      }
    } catch (error) {
      this.props.togglePopup('failed');
      this.setState({popupMessage: error.data.msg});
    }
  };

  render() {
    const {isDeleteMode, showPopup} = this.props;
    const {
      fen,
      selectedSquare,
      popupMessage,
      downloadingProgress,
      searchingProgress,
      hasProgressLoader,
      matchedGames
    } = this.state;

    return (
      <ChessboardWrapper>
        <ChessboardInnerWrapper>
          <Col>
            <DeleteButton
              onClick={() => this.props.toggleDeleteMode()}
              isDeleteMode={isDeleteMode}
            >
              <img src={deletePng} alt="delete"/>
            </DeleteButton>
          </Col>

          <Chessboard
            sparePieces
            position={fen}x
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
        </ChessboardInnerWrapper>

        <Col>
          <Input
            type="text"
            placeholder="chess.com username"
            value={this.state.inputData}
            onChange={(e) => this.setState({inputData: e.target.value})}
          />
          <Button onClick={this.sendRequestHandler}>
            Send Request
          </Button>
        </Col>

        {showPopup &&
          <>
            <Popup>
              {popupMessage ? <h2>{popupMessage}</h2>
                :
                <>
                  {!matchedGames &&
                    <>
                      <ProgressBar
                        progressText="Downloading games..."
                        hasProgressLoader={hasProgressLoader}
                        progress={Math.floor(downloadingProgress)}
                      />
                      {
                        downloadingProgress === 100 &&
                        <ProgressBar
                          progressText="Searching..."
                          hasProgressLoader={hasProgressLoader}
                          progress={Math.floor(searchingProgress)}
                        />
                      }
                    </>
                  }

                  {matchedGames && <MatchedGames matchedGames={matchedGames}/>}
                </>
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
