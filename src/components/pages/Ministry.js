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
                        <Typography variant="body2" color="text.secondary">
                            
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
                        <Typography variant="body2" color="text.secondary">
                            
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