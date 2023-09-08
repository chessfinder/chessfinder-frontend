import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import {Button, Box} from '@mui/material';
import InputBase from "@mui/material/InputBase";
import {alpha, styled} from "@mui/material/styles";

const Search = styled('div')(({theme}) => ({
    width: '100%',
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    height: '100%',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    pointerEvents: 'none',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        width: '100%',
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

const StylesToolbar = styled(Toolbar)(({theme}) => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 2,
    '& MuiToolbar-root' : {
        paddingLeft: 0
    }
}))


const SearchBox: React.FC = () => {

    const handleSearch = () => {
        console.log('Clicked search')
    };

    return (
        <Box sx={{flexGrow: 1, mb: 2}}>
            <StylesToolbar>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Username…"
                        inputProps={{'aria-label': 'search'}}
                        sx={{ flex: 1, width: '100%' }}
                    />
                </Search>
                <Button
                    variant="contained"
                    color={'secondary'}
                    sx={{ml: 1}}
                    onClick={handleSearch}>
                    Search
                </Button>
            </StylesToolbar>
        </Box>
    );
};

export default SearchBox;
