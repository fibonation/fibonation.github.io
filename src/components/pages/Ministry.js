import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import CorePage from './CorePage';
import './Ministry.css';

function Ministry() {
  return (
    <CorePage>
        <Grid container justifyContent='center' spacing={3} px={5} alignItems='stretch'>
            <Grid item md={4}>
                <Card>
                    <CardMedia
                        component='img'
                        alt='Defense Minister image'
                        image={null}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Defense Minister
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card>
                    <CardMedia
                        component='img'
                        alt='R&D Minister image'
                        image={null}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            R&D Minister
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card>
                    <CardMedia
                        component='img'
                        alt='SLCE Minister image'
                        image={null}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            SLCE Minister
                        </Typography>
                        <Typography paragraph variant="body2" color="text.secondary">
                            A multifaceted minister, SLCE stands for Sports, Leisure, Culture and Economy.
                        </Typography>
                        <Typography paragraph variant="body2" color="text.secondary">
                            It has the biggest count of sublevations in Fibonation among the ministries but somehow, it remains his status in the nation.
                        </Typography>
                        <Typography paragraph variant="body2" color="text.secondary">
                            It created a cryptocurrency to be later lost in the depths of the Ethereum testnet.
                        </Typography>
                        <Typography paragraph variant="body2" color="green">
                            Loves mango 🥭
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card>
                    <CardMedia
                        component='img'
                        alt='I/E Relationships Minister image'
                        image={null}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            I/E Relationships Minister
                        </Typography>
                        <Typography paragraph variant="body2" color="text.secondary">
                            The internal and external relationships minister jobs is to comunicate the actions and desires of the ministry to both Fibonation citizens and foreigners.
                        </Typography>
                        <Typography paragraph variant="body2" color="text.secondary">
                            It achievements helped to bring some of the nowadays ministers of Fibonation.
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card>
                    <CardMedia
                        component='img'
                        alt="Sky's Minister image"
                        image={null}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Sky's Minister
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={4}>
                <Card>
                    <CardMedia
                        component='img'
                        alt="Wyvern's Minister image"
                        image={null}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Wyvern's Minister
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </CorePage>
  );
}

export default Ministry;