import React, { useState, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import portrait from '../images/portrait.jpg';
import overlay from '../images/overlay.jpg';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import 'aos/dist/aos.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    width: '100vw',
    height: '-webkit-fill-available',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to bottom, #4731d4 65%, #c9ee87 35%)',
    '@media (orientation: landscape)': {
      background: 'linear-gradient(to right, #4731d4 70%, #c9ee87 30%)',
    },
  },
  overlay: {
    display: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: `url(${overlay}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    opacity: 0.5,
    filter: 'saturate(0)',
    mixBlendMode: 'multiply',
  },
  nav: {
    position: 'absolute',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    top: 0,
    width: '100%',
    padding: theme.spacing(1),
    '@media (orientation: landscape)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '100%',
    },
  },
  navLink: {
    color: '#c9ee87',
    '@media (orientation: landscape)': {
      color: '#4731d4',
    },
  },
  navIcon: {
    fontSize: '45px',
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomLeftRadius: '50%',
    borderBottomRightRadius: '50%',
    '@media (orientation: landscape)': {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      [theme.breakpoints.down('sm')]: {
        width: '95%',
        position: 'absolute',
        left: 0,
      },
    },
  },
  portraitContainer: {
    padding: theme.spacing(2),
    width: '70%',
    maxWidth: 350,
    '@media (orientation: landscape)': {
      width: '30%',
    },
  },
  portrait: {
    width: '100%',
    borderRadius: '100%',
  },
  textContainer: {
    textAlign: 'center',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    cursor: 'default',
    '@media (orientation: landscape)': {
      textAlign: 'left',
    },
  },
  heading: {
    fontSize: 40,
    fontFamily: 'Raleway',
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      fontSize: 70,
    },
  },
  subheading: {
    color: '#f4f4f4',
  },
  button: {
    zIndex: 1000,
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '20px',
    animation: 'bounce 0.6s infinite alternate',
    cursor: 'pointer',
    color: '#4731d4',
    transition: '0.3s',
    '&:hover': {
      transform: 'scale(1.2)',
      color: '#4731d4',
    },
    '@media (orientation: landscape)': {
      color: '#c9ee87',
      '&:hover': {
        transform: 'scale(1.2)',
        color: '#f4f4f4',
      },
    },
  },
  knowMore: {
    fontSize: 20,
  },
  svg: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
}));

function Hero() {
  const classes = useStyles();
  const [height, setHeight] = useState(window.innerHeight);

  useLayoutEffect(() => {
    function updateHeight() {
      setHeight(window.innerHeight);
    }
    window.addEventListener('resize', updateHeight);
  }, []);

  return (
    <Box style={{ height: height }} className={classes.wrapper}>
      <Box className={classes.overlay}></Box>
      {/* Start of Nav */}
      <Box data-aos="fade-left" data-aos-once="true" className={classes.nav}>
        <IconButton
          data-aos="fade-left"
          data-aos-once="true"
          ease-in="true"
          className={classes.navLink}
        >
          <WorkOutlineIcon className={classes.navIcon} />
        </IconButton>
        <IconButton
          className={classes.navLink}
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="100"
          ease-in="true"
        >
          <MailOutlineIcon className={classes.navIcon} />
        </IconButton>
        <IconButton
          className={classes.navLink}
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="200"
          ease-in="true"
        >
          <GitHubIcon className={classes.navIcon} />
        </IconButton>
        <IconButton
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-delay="300"
          ease-in="true"
          className={classes.navLink}
        >
          <LinkedInIcon className={classes.navIcon} />
        </IconButton>
      </Box>
      {/* End of Nav */}
      {/* Start Of Main Container */}
      <Box className={classes.container}>
        <Box
          data-aos="fade-down"
          data-aos-once="true"
          data-aos-delay="300"
          ease-in="true"
          className={classes.textContainer}
        >
          <Typography className={classes.heading} color="primary" variant="h3">
            Wes Banyard.
          </Typography>
          <Typography className={classes.subheading} variant="h5">
            Front End Developer
          </Typography>
        </Box>
        <Box
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="500"
          ease-in="true"
          className={classes.portraitContainer}
        >
          <img
            className={classes.portrait}
            src={portrait}
            alt="portrait of Wes"
          />
        </Box>
      </Box>
      <Box className={`${classes.button} animate__animated animate__bounces`}>
        <Typography className={classes.knowMore}>Know More</Typography>
        <ExpandMoreIcon className={classes.arrow} />
      </Box>
    </Box>
    /*  End Of Main Container */
  );
}

export default Hero;
