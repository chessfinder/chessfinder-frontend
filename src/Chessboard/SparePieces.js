import React, { Component } from 'react';
import { connect } from "react-redux";
import { setPieceInfo, setDeleteModeFalse } from "../redux/actions";
import Piece from './Piece';
import Chessboard from './index';
import { squareStates } from "./Constants";

class SparePieces extends Component {

  constructor(props) {
    super(props);
  }

  handleSparePieceClick = (piece) => {
    this.props.setPieceInfo(piece);
    this.props.setDeleteModeFalse();
  };

  getOrientation = orientation => {
    const { top, bottom } = this.props;

    if(top) {
      return orientation === 'black' ? 'white' : 'black';
    } else if(bottom) {
      return orientation === 'black' ? 'black' : 'white';
    }
     return orientation === 'common';

  };

  render() {
    const { isSparePiece, sparePiece, isToggleSparePiece } = this.props.pieceInfo;

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
              <div className='spare-pieces' style={this.props.left ? {} : spareStyles(context.width)}>
                  {spares.map(p => (
                      <div data-testid={`spare-${p}`}
                           key={p}
                           onClick={() => this.handleSparePieceClick(p)}
                           style={{
                            boxShadow: (sparePiece === p && isSparePiece && !isToggleSparePiece)  ? 'inset 0 0 1px 4px yellow' : '',
                             borderRadius: '8px'
                          }}
                      >
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

const mapStateToProps = (state) => ({
  pieceInfo: state.pieceInfo,
  deletePieces: state.deletePieces
});

const mapDispatchToProps = (dispatch) => ({
  setPieceInfo: (data) => dispatch(setPieceInfo(data)),
  setDeleteModeFalse: () => dispatch(setDeleteModeFalse())
});

export default connect(mapStateToProps, mapDispatchToProps)(SparePieces);

const spareStyles = width => ({
  width,
  display: 'flex',
  justifyContent: 'center',
  marginBlock: '10px'
});
