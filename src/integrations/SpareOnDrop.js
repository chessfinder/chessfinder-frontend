import React, {Component, useState} from 'react'; // eslint-disable-line no-unused-vars
import Chessboard from '../Chessboard';
import Chess from '../Chessboard/chess';

class SpareOnDrop extends Component {

  state = {
    fen: 'start',
  };

  componentDidMount() {
    this.game = new Chess();
  }

  onDrop = ({ targetSquare, sourceSquare, piece }) => {

    console.log('sourceSquare', sourceSquare)

    if(this.state.fen === 'start') {
      this.setState(() => ({
        fen: {
          [targetSquare]: piece
        }
      }));
    } else {
      this.setState(() => ({
        fen: {
          ...this.state.fen,
          [targetSquare]: piece
        }
      }));
    }
  };

  onDragOverSquare = square => {
    console.log(square)
  }

  render() {
    const { fen } = this.state;

    return (
        <div className="App">
          {console.log(fen, 'fen')}
          <Chessboard
              sparePieces
              position={fen}
              dropOffBoard="trash"
              onDrop={this.onDrop}
              onDragOverSquare={this.onDragOverSquare}
          />
        </div>
    );
  }


}

export default SpareOnDrop;
