import {useState, useRef, useEffect} from 'react'
import 'chessboard-element';

interface ChessBoardProps {
  position: string;
}

const ChessBoard: React.FC<ChessBoardProps> = ({ position }) => {

    const [fen, setFen] = useState('empty');
    const boardRef = useRef(null);

    useEffect(() => {
        if (boardRef.current) {
            setFen(boardRef.current.fen())
        }
    }, [])


    const clearBoard = () => {
        if (boardRef.current) {
            boardRef.current.clear();
        }
    };

    const resetBoard = () => {
        if (boardRef.current) {

            boardRef.current.setPosition('start');
        }
    };

    const handlePieceDrop = () => {

        if (boardRef.current) {

            setFen(boardRef.current.fen())

            console.log(boardRef.current.fen(), '////');
        }

    };

    const sendRequest = () => {
        console.log(fen, 'fen')
    }

  return (
    <div className="chessboard-wrapper">
        <chess-board
            ref={boardRef}
            draggable-pieces
            spare-pieces
            drop-off-board="trash"
            onDrop={handlePieceDrop}
        />
        <button onClick={clearBoard}>Clear Board</button>
        <button onClick={resetBoard}>Start Position</button>
        <button onClick={sendRequest}>Send Request</button>
    </div>
  );
}

export default ChessBoard;