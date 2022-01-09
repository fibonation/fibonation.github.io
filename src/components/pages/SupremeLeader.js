import { Divider, Grid, Typography } from '@mui/material';
import CorePage from './CorePage';
import fibonacciSpyral from '../../assets/images/fibonacci.png';
import './SupremeLeader.css';

function SupremeLeader() {
  return (
    <CorePage>
        <Grid container px={5}>
            <Grid item md={12}>
                <Typography variant='h3' textAlign='center' pb={2}>The Supreme Leader</Typography>
            </Grid>
            <Grid item container md={3} alignItems='center'>
                <img src={fibonacciSpyral} className='left-spyral' alt='Left spyral'/>
                </Grid>
            <Grid item container md={6} py={2}>
                <Divider style={{width:'100%', marginBottom: '1em'}}></Divider>
                <Typography paragraph>
                    This role has the biggest authority in the nation.
                </Typography>
                <Typography paragraph>
                    In case there is doubt in the ministry, his/her vote will be the one which have the last word in every debate or decision. 
                </Typography>
                <Typography paragraph>
                    The Supreme Leader acts as representative of all the Fibonatians regarding to other nations or collectives of the world. Along with the ministry of Foreign Affairs, the Leader has the responsibility of stablishing good relations between this foreign groups, dealing with the problems diplomatically and cooperating with the minister of defense in case a war may occur.
                </Typography>
                <Typography paragraph>
                    As the head of the Supreme Ministry, the Supreme Leader has the obligation of controlling the state of every Ministry and their current projects.
                </Typography>
                <Divider style={{width:'100%'}}></Divider>
            </Grid>
            <Grid item container md={3} alignItems='center'>
                <img src={fibonacciSpyral} className='right-spyral' alt='Right spyral'/>
                </Grid>
        </Grid>
    </CorePage>
  );
}

export default SupremeLeader;