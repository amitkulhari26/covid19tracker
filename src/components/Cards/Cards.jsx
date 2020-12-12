import React from 'react'
import CountUp from 'react-countup'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';


import cx from 'classnames'
import styles from './Cards.module.css'
const useStyles = makeStyles({
    root: {
        width: 300,
    },
});
function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
    const classes = useStyles();

    if (!confirmed) {
        return (
            <div className={classes.root}>
                <Skeleton />
            </div>
        );
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify={"center"}>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5"><CountUp start={0} end={confirmed.value} time={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">
                            Number of active cases of COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5"><CountUp start={0} end={recovered.value} time={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">
                            Number of recoveries from COVID-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5"><CountUp start={0} end={deaths.value} time={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">
                            Number of deaths casused by COVID-19
                        </Typography>
                    </CardContent>
                </Grid>

            </Grid>
        </div>
    )
}

export default Cards
