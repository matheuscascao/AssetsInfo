import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

const Header = () => {
    return (
        <Box sx = {{
            bgcolor: '#051B30',
            width: '100%',
            textAlign: 'center',
            padding: '1.5rem',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Typography variant="h3" component="h2" style = {{
                fontSize: '2.6rem',
                fontFamily: 'Raleway',
                fontWeight: 'bold',
                color: '#FFFFFF',
                
                width: '16.5rem',
                padding: '0px',
                borderBottom: '1px solid #FFFFFF',
            }}>
                ASSET INFO
            </Typography>
        </Box>
    );
}

export default Header;