import { Grid, Paper, Typography } from '@mui/material';
import './App.css';
import CorePage from './components/pages/CorePage';

function App() {
  return (
    <CorePage>
      <Grid container>
        <Grid item md={3}></Grid>  
        <Grid  item md={6}>
          <Paper className='jumbotron-home'>
            <Typography paragraph variant='h6' textAlign='center'>Welcome to Fibonation!</Typography> 
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non elit suscipit, interdum diam in, blandit magna. Aenean ac maximus enim. Maecenas blandit id ante ut suscipit. Sed in commodo nulla, in egestas tortor. Donec condimentum arcu vitae justo eleifend tincidunt. Pellentesque pretium ultricies ex, id interdum orci pharetra sit amet. Duis sagittis lacus in ullamcorper ullamcorper. Vestibulum consequat tellus id erat tristique, id porta massa ultrices. Pellentesque laoreet, lectus ac dictum sodales, neque lorem ullamcorper ligula, ac finibus erat magna sit amet turpis. Donec pellentesque libero nibh, ut tempor purus venenatis dignissim. Sed tincidunt dui quis ipsum tincidunt dignissim. Suspendisse eu aliquam mi. Aliquam ac lectus nec elit condimentum maximus at ut sem. 
            </Typography>
          </Paper>
        </Grid>  
        <Grid item md={3}></Grid>  
      </Grid>
    </CorePage>
  );
}

export default App;
