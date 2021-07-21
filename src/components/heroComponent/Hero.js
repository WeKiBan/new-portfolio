import React, { useState } from 'react';
import { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
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
  wrapper: {
    maxWidth: '100vw',
    position: 'relative',
    background: 'linear-gradient(to right, #4731d4 65%, #c9ee87 35%)',
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      background: 'linear-gradient(to bottom, #4731d4 65%, #c9ee87 35%)',
    },
  },
  nav: {
    boxSizing: 'border-box',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    top: 0,
    right: 0,
    left: 0,
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
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
    position: 'absolute',
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
    justifyContent: 'space-evenly',
    maxWidth: '2200px',
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      '@media (orientation: landscape)': {
        flexDirection: 'row',
        width: '100%',
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
      '@media (orientation: landscape)': {
        width: '50%',
        alignItems: 'flex-start',
        paddingLeft: theme.spacing(4),
      },
    },
  },
  subheading: {
    color: '#f4f4f4',
  },
  heading: {
    fontFamily: 'Cabin, sans-serif',
    fontWeight: 500,
    fontSize: '60px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '40px',
    },
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      '@media (orientation: landscape)': {
        width: '35%',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '@media (orientation: landscape)': {
        width: '25%',
      },
    },
  },
  portrait: {
    width: '100%',
    maxWidth: '400px',
    boxShadow: '2px 5px 16px 0px #0B325E, 5px 5px 15px 5px rgba(0,0,0,0)',
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      '@media (orientation: portrait)': {
        width: '80%',
      },
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
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(orientation: portrait)');
    function handleOrientationChange() {
      setWindowHeight(window.innerHeight);
      setWindowWidth(window.innerWidth);
    }
    mediaQueryList.addEventListener('change', handleOrientationChange);

    return () =>
      mediaQueryList.removeEventListener('change', handleOrientationChange);
  }, []);

  const classes = useStyles();

  return (
    <Box
      style={{ height: windowHeight, maxWidth: windowWidth }}
      className={classes.wrapper}
    >
      <Box data-aos="fade-left" data-aos-once="true" className={classes.nav}>
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

      <Box className={classes.container}>
        <Box
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300"
          className={classes.textContainer}
        >
          <Typography className={classes.heading} color="primary" variant="h1">
            Wes Banyard.
          </Typography>
          <Typography className={classes.subheading} variant="h5">
            Front End Developer
          </Typography>
        </Box>
        <Box
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          className={classes.imageContainer}
        >
          <img
            className={classes.portrait}
            src={portrait}
            alt="portrait of Wes"
          />
        </Box>
      </Box>
      <Box className={classes.button}>
        <Typography className={classes.knowMore}>Know More</Typography>
        <ExpandMoreIcon className={classes.arrow} />
      </Box>
    </Box>
  );
}

export default Hero;
