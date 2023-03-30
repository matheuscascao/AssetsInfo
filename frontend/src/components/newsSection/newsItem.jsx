import Box from '@mui/material/Box';
import { Grid, Link, Typography } from '@mui/material';

const NewsItem = (props) => {
    return (
    <Grid item xs={3}>
        <Box
        sx = {{
            backgroundColor: "#fff",
            border: "0px solid #fff",
            borderRadius: "9px",
            overflow: "hidden",
            href:"#",
            height:"22rem",
        }}
        >
            <img 
            src={props.url_to_image}
            backgroundColor = "#fff"
            alt = "news"
            style = {{
                width:"100%", 
                height:"10rem",
                objectFit:"cover",
                borderBottom: "1px solid #051B30"}}
            />
            <Box sx = {{px: "0.7rem", py: "2rem"}}>
                <Typography 
                    variant="h6" 
                    component="h5" 
                    sx={{
                        fontFamily: "Raleway",
                        fontWeight: "900",
                        fontSize: "0.9rem",
                        textAlign: "center",

                        color: "#051B30",
                    }}
                >{props.title}</Typography>
                <Typography 
                    variant="p" 
                    component="p" 
                    sx={{
                        fontFamily: "Roboto",
                        fontWeight: "light",
                        fontSize: "0.8rem",
                        textAlign: "center",
                        marginTop: "1rem",
                        color: "#051B30",
                    }}
                >{props.description}</Typography>
            </Box>
        </Box>
        <Link 
                    href={props.url}
                    underline = "hover"
                    sx={{
                        fontFamily: "Roboto",
                        fontWeight: "light",
                        fontSize: "0.8rem",
                        textAlign: "right",
                        marginTop: "0.2rem",
                        color: "#fff",
                    }}
                >See the Full Article from {props.source}
                </Link>
      </Grid>
    )
}

export default NewsItem;