import { useRef } from 'react';
import 'chessboard-element';
import {Container, Grid, Box, Button} from '@mui/material';
import {styled} from "@mui/material/styles";
import Header from './layout/Header';
import RightColHeader from "./components/RightColHeader";
import SearchBox from "./components/SearchBox";
import './assets/styles/app.scss'

function App() {
  const boardRef = useRef(null);

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
      console.log(boardRef.current.fen(), '////');
    }

  };

  const findGame = () => {
    if (boardRef.current) {
      console.log(boardRef.current.fen(), 'fen');
    }

    // try {
    //   request(`/search?q=${query}`).then((res) => {
    //     setGames(res.games);
    //     setTaskid(res.taskId);
    //     console.log('Searching for:', query);
    //   });
    // } catch (error) {
    //   console.error('Error searching:', error);
    // }

  }

  const RightColBody = styled('div')(({theme}) => ({
    margin: theme.spacing(2)
  }))

  return (
    <>
      <Header/>

      <Container maxWidth="xl">
        <Grid item container spacing={2} md={10} margin="auto">
          <Grid item xs={5} sx={{ml: 4}}>
            <chess-board
              spare-pieces
              style={{width: "450px"}}
              ref={boardRef}
              drop-off-board="trash"
              onDrop={handlePieceDrop}
            />
          </Grid>

          <Grid item xs={6}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#efefef',
              }}>
              <RightColHeader/>

              <RightColBody>
                <Button
                  variant="contained"
                  color={'secondary'}
                  sx={{minWidth: "170px"}}
                  onClick={clearBoard}
                >
                  Clear Board
                </Button>

                <Button
                  variant="contained"
                  color={'secondary'}
                  sx={{minWidth: '170px', ml: 2}}
                  onClick={resetBoard}>
                  Start Position
                </Button>

                <SearchBox findGame={findGame}/>
              </RightColBody>

            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
