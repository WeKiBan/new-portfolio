import React from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import portrait from '../../images/portrait.jpg';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import Aos from 'aos';
import 'aos/dist/aos.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

const useStyles = makeStyles((theme) => ({
  box: {
    position: 'relative',
    height: window.innerHeight,
    background: 'linear-gradient(to right, #4731d4 65%, #c9ee87 35%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      background: 'linear-gradient(to bottom, #4731d4 65%, #c9ee87 35%)',
    },
  },
  toolbar: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    top: 0,
    right: 0,
    left: 0,
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  link: {
    fontFamily: 'Lato',
    fontSize: '20px !important',
    color: '#0B325E',
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      color: '#c9ee87',
    },
  },
  icon: {
    fontSize: 40,
  },
  container: {
    width: '90%',
    maxWidth: '2200px',
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      maxWidth: '400px',
      '@media (orientation: landscape)': {
        display: 'flex !important',
        flexDirection: 'row !important',
        border: '5px solid yellow',
        maxWidth: '100%',
      },
    },
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      width: '100%',
    },
  },
  portrait: {
    width: '75%',
    maxWidth: '300px',
    boxShadow: '2px 5px 16px 0px #0B325E, 5px 5px 15px 5px rgba(0,0,0,0)',
    borderRadius: '50%',
    '@media (orientation: landscape)': {
      width: '20%',
    },
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  subheading: {
    color: '#f4f4f4',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: '20px',
    },
  },
  heading: {
    fontFamily: 'Cabin, sans-serif',
    fontWeight: 500,
    fontSize: '60px',
    [theme.breakpoints.down('md')]: {
      fontSize: '50px',
      paddingBottom: '20px',
    },
  },

  arrow: {
    fontSize: 40,
    width: 100,
    marginTop: '-10px',
    padding: 0,
    textAlign: 'center',
    opacity: 1,
  },
  knowMore: {
    fontSize: '14px !important',
  },
  button: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '20px',
    animation: 'bounce 0.6s infinite alternate',
    cursor: 'pointer',
    color: '#f4f4f4',
    '&:hover': {
      transform: 'scale(1.2)',
      color: '#c9ee87 !important',
    },
    [theme.breakpoints.down('sm')]: {
      color: '#4731d4',
      bottom: '10px',
      '&:hover': {
        transform: 'scale(1.2)',
        color: '#4731d4 !important',
      },
    },
  },
}));

function Hero() {
  useEffect(() => {
    Aos.init();
  }, []);

  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Box
        data-aos="fade-left"
        data-aos-once="true"
        className={classes.toolbar}
      >
        <IconButton
          data-aos="fade-left"
          data-aos-once="true"
          className={classes.link}
        >
          <WorkOutlineIcon className={classes.icon} />
        </IconButton>
        <IconButton
          className={classes.link}
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="100"
        >
          <MailOutlineIcon className={classes.icon} />
        </IconButton>
        <IconButton
          className={classes.link}
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="200"
        >
          <GitHubIcon className={classes.icon} />
        </IconButton>
        <IconButton
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="300"
          className={classes.link}
        >
          <LinkedInIcon className={classes.icon} />
        </IconButton>
      </Box>

      <Grid className={classes.container} container>
        <Grid
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300"
          className={classes.textContainer}
          item
          sm={12}
          md={5}
        >
          <Typography className={classes.heading} color="primary" variant="h1">
            Wes Banyard.
          </Typography>
          <Typography className={classes.subheading} variant="h5">
            Front End Developer
          </Typography>
        </Grid>
        <Grid
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          className={classes.imageContainer}
          item
          sm={12}
          md={6}
        >
          <img
            className={classes.portrait}
            src={portrait}
            alt="portrait of Wes"
          />
        </Grid>
      </Grid>
      <Box className={classes.button}>
        <Typography className={classes.knowMore}>Know More</Typography>
        <ExpandMoreIcon className={classes.arrow} />
      </Box>
    </Box>
  );
}

export default Hero;
