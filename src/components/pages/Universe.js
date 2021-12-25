import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import NavigationBar from '../navigation/NavigationBar';
import ministryImage from '../../assets/images/ministry.jpg';

function Universe() {
  return (
    <>
      <NavigationBar />
      <Grid container justifyContent='center' spacing={2}>
        <Grid item md={3}>
            <Card>
                <CardActionArea>
                    <CardMedia 
                        component='img'
                        alt='The Ministry'
                        image={ministryImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Ministry
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The Ministry of Fibonation is made up of a group of illustrious figures of the nation, who are in charge of the organization of tasks in different sectors. 
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Universe;