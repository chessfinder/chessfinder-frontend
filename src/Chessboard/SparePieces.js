import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Piece from './Piece';
import Chessboard from './index';
import {squareStates} from "./Constants";

function SparePiecesTop() {
  return <SparePieces top />;
}

function SparePiecesBottom() {
  return <SparePieces />;
}

function SparePiecesLeft() {
  return <SparePieces left />;
}

class SparePieces extends Component {
  static propTypes = { top: PropTypes.bool, left: PropTypes.bool };

  static Top = SparePiecesTop;
  static Bottom = SparePiecesBottom;
  static Left = SparePiecesLeft;

  getOrientation = orientation => {
    const { top, left } = this.props;

    if(top) {
      return orientation === 'black' ? 'white' : 'black';
    } else if(left) {
      return orientation === 'common';
    }
    return orientation === 'black' ? 'black' : 'white';
  };

  render() {
    return (
        <Chessboard.Consumer>
          {context => {
            const spares =
                this.getOrientation(context.orientation) === 'black'
                    ? ['bK', 'bQ', 'bR', 'bB', 'bN', 'bP']
                    : this.getOrientation(context.orientation) === 'white'
                    ? ['wK', 'wQ', 'wR', 'wB', 'wN', 'wP']
                    : [squareStates.UNKNOWN, squareStates.OCCUPIED];
            return (
              <div style={this.props.left ? {} : spareStyles(context.width)}>
                  {spares.map(p => (
                      <div data-testid={`spare-${p}`} key={p}>
                        <Piece
                            piece={p}
                            width={context.width}
                            setPosition={context.setPosition}
                            square={'spare'}
                            dropOffBoard={context.dropOffBoard}
                            draggable={true}
                            onDrop={context.onDrop}
                            sourceSquare={context.sourceSquare}
                            targetSquare={context.targetSquare}
                            sourcePiece={context.sourcePiece}
                            orientation={context.orientation}
                            manualDrop={context.manualDrop}
                            id={context.id}
                            pieces={context.pieces}
                            wasManuallyDropped={context.wasManuallyDropped}
                            onPieceClick={context.onPieceClick}
                            allowDrag={context.allowDrag}
                        />
                      </div>
                  ))}
                </div>
            );
          }}
        </Chessboard.Consumer>
    );
  }
}

export default SparePieces;

const spareStyles = width => ({
  display: 'flex',
  justifyContent: 'center',
  width
});