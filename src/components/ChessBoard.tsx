import React from "react";
import { Chessboard } from "react-chessboard";
// import { LIGHT_QUESTION_ICON, DARK_QUESTION_ICON } from '../constants';
// TODO: Fix exported images path
import LIGHT_QUESTION_ICON from '../assets/images/light-question-mark.svg';
import DARK_QUESTION_ICON from '../assets/images/dark-question-mark.svg';

interface ChessBoardProps {
  position: string;
}

const ChessBoard: React.FC<ChessBoardProps> = ({ position }) => {

  const customPiece = (theme?: string) => {
    return <img
      src={theme === 'white' ? LIGHT_QUESTION_ICON : DARK_QUESTION_ICON}
      alt={"light"}
      style={{
        width: '100%',
        height: '100%'
      }}
    />
  }

  return (
    <div className="chessboard-wrapper">
      <Chessboard
        id="chessboard"
        arePiecesDraggable={false}
        position={position}
        customPieces={{
          wR: () => (customPiece('white')),
          bR: () => (customPiece()),
          wN: () => (customPiece('white')),
          bN: () => (customPiece()),
          wB: () => (customPiece('white')),
          bB: () => (customPiece()),
          wQ: () => (customPiece('white')),
          bQ: () => (customPiece()),
          wK: () => (customPiece('white')),
          bK: () => (customPiece()),
          wP: () => (customPiece('white')),
          bP: () => (customPiece()),
        }}
        customLightSquareStyle= {{backgroundColor: '#d9d4d4'}}
        customDarkSquareStyle= {{backgroundColor: '#374173'}}
      />
    </div>
  );
}

export default ChessBoard;