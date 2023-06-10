import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import lineup from '../../assets/lineup.svg';

const FinancialInfoItem = (props) => {
    return (
        <Box sx = {{
            color: '#051B30',
            padding: '0.8rem 0.5rem 0.8rem 0.5rem',
        }}>
            <Typography variant='h5' component="h5" sx = {{
                
                font: 'Raleway',
                fontFamily: 'Raleway',
                fontWeight: 'light',
                fontSize: '1.2rem',
            }}>{props.label}</Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {props.image ? props.value > 0 ? <img src={lineup} alt="LineUp"/>: <img src={lineup} alt="LineUp" style = {{transform: "rotate(180deg)"}}/> : null}
                <Typography 
                variant='h5' 
                component="h5"
                sx= {{
                    marginLeft: '0.5rem',
                    fontWeight: '900',
                    fontSize: '2.0rem',
                    fontFamily: 'Raleway',
                }}>{props.value} {props.symbol}</Typography>
            </Box>
        </Box>
    )
}

export default FinancialInfoItem;