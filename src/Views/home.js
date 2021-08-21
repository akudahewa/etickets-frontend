import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '../Components/appBar';
import MovieBanner from '../images/movieBanner.jpg';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MovieCard from '../Components/movieCard';
import EventCard from '../Components/eventCardComponent';
import Grid from '@material-ui/core/Grid';
import HeroSection from '../Components/homaPageBanner';

export default function Home() {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <AppBar />
            {/* <img className={classes.media} src={MovieBanner} alt='Main Banner' /> */}
            <HeroSection />
            <Container>
            <div className={classes.subHeader}>
                <Typography  variant="button">
                    Movies
                </Typography>
                </div>
                <Grid container spacing={3}>
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                </Grid>
            </Container>
            <Container>
                <div className={classes.subHeader}>
                <Typography  variant="button">
                    Events
                </Typography>
                </div>
                <Grid container spacing={3}>
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                </Grid>
            </Container>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    media: {
        height: 300,

        width: '100%' // 16:9
    },
    subHeader:{
        marginTop:20,
        marginBottom:20
    }
}));