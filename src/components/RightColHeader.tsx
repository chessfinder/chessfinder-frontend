import { Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Typography } from '@mui/material';

function RightColHeader() {

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        marginBottom: 2,
        backgroundColor: 'primary.main',
      }}
    >
      <InfoIcon color="info" style={{marginRight: '8px'}}/>
      <Typography variant="body2" color="info.main">
        Info
      </Typography>
    </Box>
  )
}

export default RightColHeader;
