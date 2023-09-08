import {useEffect, useRef, useState} from 'react';
import 'chessboard-element';
import {Container, Box, Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from './layout/Header';
import RightColHeader from "./components/RightColHeader";
import SearchBox from "./components/SearchBox";
import './assets/styles/app.scss'
import { styled } from "@mui/material/styles";

function App() {
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

    const RightColBody = styled('div')(({theme}) => ({
        margin: theme.spacing(2)
    }))

  return (
    <>
      <Header/>

      <Container maxWidth="xl">
        <Grid container spacing={2} md={10} margin="auto">
          <Grid item xs={6} md={6}>
              <chess-board
                  ref={boardRef}
                  draggable-pieces
                  spare-pieces
                  drop-off-board="trash"
                  onDrop={handlePieceDrop}
              />
          </Grid>

          <Grid item xs={6} md={6}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#efefef',
              }}>
                <RightColHeader />

                <RightColBody>
                    <Button variant="contained" color={'secondary'} onClick={clearBoard}>Clear Board</Button>
                    <Button variant="contained" color={'secondary'} onClick={resetBoard}>Start Position</Button>
                    <Button variant="contained" color={'secondary'} onClick={sendRequest}>Send Request</Button>

                    <SearchBox />
                </RightColBody>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
