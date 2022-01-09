import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import ministryImage from '../../assets/images/ministry.jpg';
import quotesImage from '../../assets/images/quotes.jpg';
import antiFurriesImage from '../../assets/images/antifurry.jpg';
import pointInterestImage from '../../assets/images/poi.jpg';
import calendarImage from '../../assets/images/calendar.jpg';
import gastronomyImage from '../../assets/images/gastronomy.jpg';
import supremeImage from '../../assets/images/supreme.jpg';
import CorePage from './CorePage';
import './Universe.css';
import { Link } from 'react-router-dom';

function Universe() {
  return (
    <CorePage>
      <Grid container justifyContent='center' spacing={3} px={5} alignItems='stretch'>
        <Grid item md={3}>
            <Card className='card'>
                <CardActionArea component={Link} to='/universe/supreme-leader'>
                    <CardMedia 
                        component='img'
                        alt='The Supreme Leader'
                        image={supremeImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            The Supreme Leader
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            The Supreme Leader is the head of the Supreme Ministry of Fibonation and acts as representative of all the Fibonatians.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item md={3}>
            <Card>
                <CardActionArea component={Link} to='/universe/ministry'>
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
        <Grid item md={3}>
            <Card>
                <CardActionArea>
                    <CardMedia 
                        component='img'
                        alt='Famous quotes'
                        image={quotesImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Famous quotes
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            A recopilation of quotes either said or heard/read by a Fibonation member that transcends the threshold of epicness.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item md={3}>
            <Card>
                <CardActionArea>
                    <CardMedia 
                        component='img'
                        alt='Famous quotes'
                        image={antiFurriesImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Furric wars
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Currently, Fibonation is in war against the Furry faction. This beings are declared as public enemies since the 1st Constitution in 2017.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item md={3}>
            <Card>
                <CardActionArea>
                    <CardMedia 
                        component='img'
                        alt='Points of interest'
                        image={pointInterestImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Points of interest
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Sometimes, a Fibonation member finds a location worthy of mention: this sections shows all those places.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item md={3}>
            <Card>
                <CardActionArea>
                    <CardMedia 
                        component='img'
                        alt='Calendar'
                        image={calendarImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Calendar
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Like any oyher nation, Fibonation has its own special dates, based in events that marked Fibonation's history.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
        <Grid item md={3}>
            <Card>
                <CardActionArea>
                    <CardMedia 
                        component='img'
                        alt='Gastronomy'
                        image={gastronomyImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Gastronomy
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This section contains all the exquisite cuisine made by Fibonation members, as detailed as possible, so it can be made by other people.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
      </Grid>
    </CorePage>
  );
}

export default Universe;