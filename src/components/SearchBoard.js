import axios from 'axios';
import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import {connect} from "react-redux";
import {toggleDeleteMode, togglePopup} from "../redux/actions";
import Chessboard from '../Chessboard';
import {
  CHESSBOARD_PLATFORM,
  DEFAULT_FEN,
  PIECE_FROM_SPARE,
  SEARCH_GAMES_STATUSES,
  squareStates
} from "../Chessboard/Constants";
import {objToFen} from "../Chessboard/helpers";
import Popup from "./Popup";
import ProgressBar from "./ProgressBar";
import deletePng from "../img/delete.png";
import styled from 'styled-components';
import MatchedGames from "./MatchedGames";
import BuyMeACoffee from "./BuyMeACoffee";

const baseApiUrl = process.env.REACT_APP_BASE_API_URL;


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

const PopupMessageFailed = styled.h2`
  margin-top: 0;
  color: #bf1A2f
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #808080;
`;

const Button = styled.button`
  height: 40px;
  padding: 10px;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: #769954;
  border: 1px solid #769954;
  border-radius: 8px;

  &:not[disabled]:hover {
    background-color: #617e45;
  }

  &[disabled] {
    opacity: .5;
    cursor: not-allowed;
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
    downloadProgressLoader: true,
    searchProgressLoader: true,
    searchGamesStatus: ''
  };

  source = null;

  onDrop = ({sourceSquare, targetSquare, piece}) => {

    if (sourceSquare === targetSquare) return;

    const newFen = {...this.state.fen};

    if (sourceSquare !== PIECE_FROM_SPARE) {
      newFen[sourceSquare] = squareStates.UNKNOWN;
    }

    newFen[targetSquare] = piece;

    this.setState({
      fen: newFen
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
      this.updateSquare(square, squareStates.EMPTY);
    } else if (isSparePiece) {
      this.updateSquare(square, sparePiece);
    }
  }

  updateSquare = (square, value) => {
    const newFen = {...this.state.fen};
    newFen[square] = value;

    this.setState({
      fen: newFen
    });
  };

  handlePopupClose = () => {
    this.props.togglePopup();
    if (this.source) {
      this.source.cancel('Request canceled');
    }
  };

  sendRequestHandler = async () => {
    const {inputData} = this.state;

    try {
      if (!inputData.trim()) return;

      this.setState({matchedGames: null});

      const downLoadGamesRequestData = {username: inputData, CHESSBOARD_PLATFORM};
      const {downloadId} = await this.makeRequest('faster/game', 'post', downLoadGamesRequestData);

      this.setState({downloadId});

      if (downloadId) {
        this.props.togglePopup();
        await this.DownloadingLongPollProgress(downloadId);
      }

    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.log(error, 'error - sendRequestHandler')
      }
    }
  };

  DownloadingLongPollProgress = async (downloadId) => {
    const {showPopup} = this.props;
    const timeoutThreshold = 60000;

    try {
      if (!showPopup) return;

      const downloadGamesRequestData = `faster/game?downloadId=${downloadId}`;
      const {total, done, lastDownloadedAt, pending} = await this.makeRequest(downloadGamesRequestData, 'get');

      const lastDownloadedAtParsed = Date.parse(lastDownloadedAt);

      const downloadingProgressCalc = total !== 0 ? (done / total) * 100 : 0;

      this.setState(() => ({
        popupMessage: '',
        downloadingProgress: downloadingProgressCalc,
      }));

      if (downloadingProgressCalc === 100) this.setState({downloadProgressLoader: false})

      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - lastDownloadedAtParsed;

      if (elapsedTime >= timeoutThreshold && pending > 0) {
        this.setState({popupMessage: 'Search timeout'});
      } else {
        if (downloadingProgressCalc === 100) {
          await this.SearchingLongPollProgress();
          return;
        }

        showPopup && setTimeout(() => this.DownloadingLongPollProgress(downloadId), 6000);
      }

    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.log(error, 'error - DownloadingLongPollProgress')
      }
    }
  };

  SearchingLongPollProgress = async () => {
    const {inputData, fen} = this.state;
    const timeoutThreshold = 60000;

    try {
      const {showPopup} = this.props;
      const newObjToFen = objToFen(fen);
      const boardData = {username: inputData, platform: CHESSBOARD_PLATFORM, board: newObjToFen};

      if (!showPopup) return;

      const {searchId} = await this.makeRequest('faster/board', 'post', boardData);

      if (searchId) {
        await this.checkSearchStatus(searchId, timeoutThreshold);
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.log(error, 'error - checkSearchStatus')
      }
    }
  };

  checkSearchStatus = async (searchId, timeoutThreshold) => {
    try {
      const checkSearchStatusRequestData = `faster/board?searchId=${searchId}`;
      const {
        total,
        examined,
        status,
        matched,
        lastExaminedAtString
      } = await this.makeRequest(checkSearchStatusRequestData, 'get');

      const searchProgressCalc = total && examined && (examined / total) * 100;

      this.setState(() => ({
        popupMessage: '',
        searchingProgress: searchProgressCalc,
        searchGamesStatus: status
      }));

      if (searchProgressCalc === 100) this.setState({searchProgressLoader: false})

      const lastDownloadedAt = Date.parse(lastExaminedAtString);
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - lastDownloadedAt;

      if (elapsedTime >= timeoutThreshold && status === SEARCH_GAMES_STATUSES.inProgress) {
        this.setState({popupMessage: 'Search timeout'});
      } else {
        if (status === SEARCH_GAMES_STATUSES.searchedPartially || status === SEARCH_GAMES_STATUSES.searchedAll) {
          if (matched === null) {
            this.setState({popupMessage: 'There is no matched games'});
          } else {
            this.setState({
              matchedGames: matched,
            });
          }
          return;
        }

        setTimeout(() => this.checkSearchStatus(searchId, timeoutThreshold), 6000);
      }
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.log(error, 'error - checkSearchStatus')
      }
    }
  };

  makeRequest = async (url, method, requestData) => {
    this.source = axios.CancelToken.source();

    try {
      const response = await axios({
        method,
        url: `${baseApiUrl}/${url}`,
        data: requestData,
        cancelToken: this.source.token
      });

      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request canceled', error.message);
      } else {
        console.log('Request failed', error.message);
      }
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
      downloadProgressLoader,
      searchProgressLoader,
      matchedGames,
      searchGamesStatus
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
        </ChessboardInnerWrapper>

        <Col>
          <Input
            type="text"
            placeholder="chess.com username"
            value={this.state.inputData}
            onChange={(e) => this.setState({inputData: e.target.value})}
          />
          <Button onClick={this.sendRequestHandler} disabled={!this.state.inputData.trim()}>
            Search
          </Button>

          <BuyMeACoffee/>
        </Col>

        {showPopup &&
          <>
            <Popup onClose={this.handlePopupClose}>
              {popupMessage ? <PopupMessageFailed>{popupMessage}</PopupMessageFailed>
                :
                <>
                  {!matchedGames &&
                    <>
                      <ProgressBar
                        progressText="Downloading games..."
                        downloadProgressLoader={downloadProgressLoader}
                        progress={Math.floor(downloadingProgress)}
                      />
                      {
                        downloadingProgress === 100 &&
                        <ProgressBar
                          progressText="Searching..."
                          searchProgressLoader={searchProgressLoader}
                          progress={Math.floor(searchingProgress)}
                        />
                      }
                    </>
                  }

                  {matchedGames &&
                    <>
                      {searchGamesStatus === SEARCH_GAMES_STATUSES.searchedPartially &&
                        <h4>Search Partially Lorem ipsum dollar amit...</h4>
                      }
                      <MatchedGames matchedGames={matchedGames}/>
                    </>
                  }
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
  togglePopup: (popupStatus) => dispatch(togglePopup(popupStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBoard);
