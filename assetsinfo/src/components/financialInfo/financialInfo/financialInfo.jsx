import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FinancialInfoItem from "../financialInfoItem";
import Chart from 'react-apexcharts';
import chartData from './chartData';
import './financialInfo.css';

const gridFinancialStyle = {
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
};


const FinancialInfo = (props) => {

  const chartDataObject = chartData(props.sparklineData);
  
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
        // paddingight: '7rem',
        // paddingLeft: '7rem',
        mx: "7rem",
        border: "0px solid #fff",
        borderRadius: "9px",
        overflow: "hidden",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={8}
        >
          <Chart {...chartDataObject} sx = {{
            border: "0px solid #fff",
            borderRadius: "9px",
          }}/>
        </Grid>
        <Grid
          item
          xs={4}
        >
          <Grid
            container
            spacing={1}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem 0",
            }}
          >
            <Grid item xs={6} sx={gridFinancialStyle}>
              <FinancialInfoItem label={"Daily %"} value={props.daily_price_variation} symbol = "%" image/>
            </Grid>
            <Grid item xs={6} sx={gridFinancialStyle}>
                <FinancialInfoItem label={"Weekly %"} value={props.weekly_price_variation} symbol = "%" image/>
            </Grid>
            <Grid item xs={12} sx={gridFinancialStyle}>
              <FinancialInfoItem label={"Current Price"} value={props.current_price} symbol = "$" />
            </Grid>
            <Grid item xs={12} sx={gridFinancialStyle}>
                <FinancialInfoItem label={"Market Cap"} value={props.market_cap} symbol = "$"/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FinancialInfo;
