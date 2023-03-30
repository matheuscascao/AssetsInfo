import { InputAdornment } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from "@mui/material/Autocomplete";
import { BASE_URL_API_TICKERINFO } from ".././config";
import axios from 'axios'
import { useState } from 'react';

const SearchBar = (props) => {
    const [input, setInput] = useState();

    const onInputChange = (event, value) => {
        console.log(value);
        updateTickerData(value.id)
        setInput(value.id);
    }

    const updateTickerData = async (item_id) => {
        const url = BASE_URL_API_TICKERINFO + "stocks/asset_info/" + item_id
  
        const responseData = await axios.get(url);
        props.setData(responseData.data)
    }

    return (
        <Box sx = {{
            backgroundColor: '#051B30',
            textAlign: 'center',
            width: '100%',
        }}>
            <Autocomplete 
            options = {props?.coinsList ? props.coinsList : [] }
            getOptionLabel = {(option) => option?.name}
            disableUnderline={true}
            sx = {{
                color: '#fff',
                "&.MuiAutocomplete-root search-bar": {
                    color: "#fff",
                    backgroundColor: "#fff",
                }
            }}

            style = {{
                width: '100%',
                paddingRight: '7rem',
                paddingLeft: '7rem',
                paddingBottom: '2rem',
                justifyContent: "center",
                alignItems: "center",
                color: '#fff',
            }}
            onChange = {onInputChange}
                renderInput = {(params) => (
                    <TextField
                    className='search-bar'
                    sx = {{
                        "&": {
                            fontFamily: "Raleway",
                            color: "#fff",
                            backgroundColor: "#fff",
                        }
                    }}
                    {...params}
                    underlineStyle={{ display: 'none' }}
                    label="Search for an asset"
                    InputLabelProps={{ shrink: true }}
                    variant="standard"
           
                    />                   
                )}
            />
        </Box>
    );
}

export default SearchBar;