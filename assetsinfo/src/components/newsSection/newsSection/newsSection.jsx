import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NewsItem from "../newsItem";
import './newsSection.css';

const NewsSection = (props) => {
  return (
    <Box
      sx={{
        mx: "7rem",
      }}
    >
      <Grid container spacing={4}
            justifyContent="center"
            alignItems="center"
            sx = {{mb:"5rem"}}
            >
            {props.newsList.map((newsItemInfo) => <NewsItem 
              url_to_image = {newsItemInfo.url_to_image}
              title = {newsItemInfo.title}
              description = {newsItemInfo.description}
              url = {newsItemInfo.url}
              source = {newsItemInfo.source}
            />
            )}
      </Grid>
    </Box>
  );
};

export default NewsSection;
