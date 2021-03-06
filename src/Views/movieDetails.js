import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import AppBar from '../Components/appBar';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import SigleMovieImage from '../images/singleMovieImage.jpg'
import backgroundSMD from "../images/movieBanner.jpg";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



export default function MovieDetails() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AppBar />

            <div className={classes.mainImageSingleView}>
                <div className={classes.OverlayDiv}></div>
                <Container className={classes.gridContainer} >
                    <Grid container className={classes.bgContainer}>
                        <Grid item md={3} sm={12} xs={12} className={classes.leftGrid}>
                            <div className={classes.singleMovieImage}>
                                <img className={classes.sigleMovieImg} src={SigleMovieImage} />
                            </div>
                        </Grid>
                        <Grid item md={9} sm={12} xs={12} className={classes.rightGrid}>
                            <div className={classes.movieDetailsContainer}>
                                <div className={classes.movieName}>The Easy Reach</div>
                                <div className={classes.movieDetails}>
                                    Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.
                                </div>
                                <Button className={classes.buttonStyles1} variant="contained" color="secondary">
                                    Book Tickets
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <Container>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" TabIndicatorProps={{ style: { background: '#e4d804' } }}>
                    <Tab label="Summary" {...a11yProps(0)} />
                    <Tab label="Reviews" {...a11yProps(1)} />

                </Tabs>
                <TabPanel value={value} index={0}>
                    <div className={classes.tabContainer}>
                        <div className={classes.summaryItem}>
                        <div className={classes.tabHeading}>
                            The Easy Reach
                        </div>
                        <div className={classes.summaryShort}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec posuere velit. Nullam non orci lacinia, viverra nunc eu, venenatis sem. Fusce finibus mi vitae porttitor vestibulum. Morbi tellus augue, fringilla eu pellentesque sed, bibendum eu arcu. Praesent feugiat augue tempor elit aliquet sollicitudin. Aenean ornare ornare massa eget ornare. Duis consequat urna porttitor felis dapibus varius. Suspendisse ex nulla, ullamcorper eu mi vel, blandit semper ipsum. Maecenas id augue dapibus, interdum massa sed, aliquam nunc. Aenean eu felis facilisis, mollis lorem a, aliquam mi. Donec id nisi nisi. Mauris ullamcorper sapien lorem, nec egestas ipsum cursus in. Vestibulum leo dui, fermentum id est nec, sodales pharetra sem. Maecenas a pulvinar sapien. Sed ullamcorper pharetra massa, vitae commodo nisi bibendum vitae. Pellentesque ut fermentum lacus.
                        </div>
                        </div>
                        <div className={classes.summaryItem}>
                        <div className={classes.tabHeading}>
                            Cast
                        </div>
                        <div className={classes.summaryShort}>
                            
                        </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    Item Two
                </TabPanel>

            </Container>
        </>
    );
}

const useStyles = makeStyles((theme) => ({

    mainImageSingleView: {
        backgroundImage: `url(${backgroundSMD})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative'
    },

    singleMovieImage: {


    },
    sigleMovieImg: {
        width: '100%',
        maxWidth: 300,
        borderRadius: 5,
        boxShadow: "0px 3px 1px -2px red,0px 2px 2px 0px rgba(228,216,4,0.9),0px 1px 5px 0px rgba(0,0,0,0.12)"
    },
    bgContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    OverlayDiv: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 10,
        display: 'flex'
    },
    gridContainer: {
        position: 'relative',
        zIndex: 12,
        paddingBottom: '12vh',
        paddingTop: '8vw'
    },
    movieName: {
        fontWeight: 'bold',
        fontSize: '4vw',
        color: '#e4d804'
    },
    leftGrid: {
        display: 'flex',
        justifyContent: 'center'
    },
    movieDetails: {
        color: '#fff',
        maxWidth: 550
    },
    rightGrid: {
        paddingLeft: 50
    },
    buttonStyles1: {
        marginTop: 25
    },
    tabHeading: {

        fontSize: 20,
        fontWeight: 'bold'
    },
    summaryItem:{
        marginBottom:25
    }
}));
