import React, {Component} from 'react'; // eslint-disable-line no-unused-vars
import Chessboard from '../Chessboard';

class SpareOnDrop extends Component {

  state = {
    fen: 'empty',
  };

  onDrop = ({ sourceSquare, targetSquare, piece }) => {
    console.log('from = ' + sourceSquare, 'to = ' + targetSquare)

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

  render() {
    const { fen } = this.state;

    return (
      <div className="App">
        <Chessboard
          sparePieces
          position={fen}
          dropOffBoard="trash"
          onDrop={this.onDrop}
        />
      </div>
    );
  }


}

export default SpareOnDrop;
