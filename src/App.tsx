import { useState } from 'react';
import './assets/styles/app.scss'
import {Container, Box, Button} from '@mui/material';
import Grid from '@mui/material/Grid';
import Header from './layout/Header';
import ChessBoard from "./components/ChessBoard";
import RightColHeader from "./components/RightColHeader";
import { EMPTY_BOARD_POSITION, INITIAL_BOARD_POSITION } from './constants';

function App() {
  const [currentPosition, setCurrentPosition] = useState(INITIAL_BOARD_POSITION);

  return (
    <>
      <Header/>

      <Container maxWidth="xl">
        <Grid container spacing={2} md={10} margin="auto">
          <Grid item xs={6} md={6}>
            <ChessBoard position={currentPosition} />
          </Grid>

          <Grid item xs={6} md={6}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundColor: '#efefef',
              }}>
              <RightColHeader />

              <Button
                variant="contained"
                color={'secondary'}
                sx={{ml: 1}}
                onClick={() => setCurrentPosition(EMPTY_BOARD_POSITION)}>
                Reset board
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
