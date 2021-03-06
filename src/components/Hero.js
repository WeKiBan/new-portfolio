import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import 'aos/dist/aos.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: window.innerHeight,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'height 1s ease',
  },
  bg: {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://ucarecdn.com/8a7bc605-24da-4021-8cd8-a0b4ae5294bb/-/preview/-/quality/smart/')`,
    backgroundRepeat: ' no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: window.innerHeight,
    width: '100%',
    position: 'fixed',
    zIndex: -1,
    transition: 'height 1s ease',
  },
  switch: {
    color: theme.palette.secondary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000,
    '@media (orientation: landscape)': {
      flexDirection: 'column',
      marginRight: '5px',
    },
  },
  toggle: {
    '@media (orientation: landscape)': {
      transform: 'rotate(90deg)',
    },
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
    color: 'orange',
    '&:hover': {
      color: '#63A46C',
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
    justifyContent: 'center',
    alignItems: 'center',
    '@media (orientation: landscape)': {
      width: '70%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  },

  textContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
    '@media (orientation: landscape)': {
      textAlign: 'left',
    },
  },
  hello: {
    color: 'white',
    fontWeight: 100,
    [theme.breakpoints.down('md')]: {
      fontSize: 60,
    },
    [theme.breakpoints.down('sm')]: {
      '@media (orientation: landscape)': {
        fontSize: 40,
      },
    },
  },
  heading: {
    fontFamily: 'Raleway',
    fontWeight: 200,
    fontSize: 60,
    [theme.breakpoints.down('md')]: {
      fontSize: 50,
      '@media (orientation: landscape)': {
        fontSize: 40,
      },
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 40,
    },
  },
  subheading: {
    color: '#f4f4f4',
  },
  button: {
    zIndex: 1000,
    textDecoration: 'none',
    position: 'absolute',
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '20px',
    animation: 'bounce 0.6s infinite alternate',
    cursor: 'pointer',
    color: 'orange',
    transition: '0.3s',
    '&:hover': {
      transform: 'scale(1.2)',
      color: '#f4f4f4',
    },
  },
  knowMore: {
    fontSize: 20,
  },
}));

function Hero({ english, setEnglish }) {
  const classes = useStyles();
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {
      setWindowHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box style={{ height: windowHeight }} id="hero" className={classes.wrapper}>
      <div style={{ height: windowHeight }} className={classes.bg}></div>
      {/* Start of Nav */}
      <Box data-aos="fade" data-aos-once="true" className={classes.nav}>
        <IconButton
          href="#projects"
          data-aos="fade"
          data-aos-once="true"
          ease-in="true"
          className={classes.navLink}
        >
          <WorkOutlineIcon className={classes.navIcon} />
        </IconButton>
        <IconButton
          className={classes.navLink}
          href="#"
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay="100"
          ease-in="true"
        >
          <MailOutlineIcon className={classes.navIcon} />
        </IconButton>
        <IconButton
          className={classes.navLink}
          target="_blank"
          href="https://github.com/Wekiban"
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay="200"
          ease-in="true"
        >
          <GitHubIcon className={classes.navIcon} />
        </IconButton>
        <IconButton
          target="_blank"
          href="https://www.linkedin.com/in/wes-banyard/"
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay="300"
          ease-in="true"
          className={classes.navLink}
        >
          <LinkedInIcon className={classes.navIcon} />
        </IconButton>
        <div className={classes.switch}>
          <Typography color="secondary" variant="body1">
            EN
          </Typography>
          <Switch
            checked={!english}
            onChange={() => setEnglish(!english)}
            className={classes.toggle}
          />
          <Typography color="secondary" variant="body1">
            IT
          </Typography>
        </div>
      </Box>
      {/* End of Nav */}
      {/* Start Of Main Container */}
      <Box className={classes.container}>
        <Box
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay="300"
          ease-in="true"
          className={classes.textContainer}
        >
          <Typography color="primary" variant="h1" className={classes.hello}>
            {english ? 'Hello' : 'Ciao'}
          </Typography>

          <Typography
            className={classes.heading}
            color="secondary"
            variant="h3"
          >
            {english ? "I'm Wes Banyard" : 'Sono Wes Banyard'}
          </Typography>
          <Typography className={classes.subheading} variant="h5">
            Front End Developer
          </Typography>
        </Box>
      </Box>
      <Link
        to="about-section"
        className={`${classes.button} animate__animated animate__bounces`}
      >
        <Typography className={classes.knowMore}>
          {english ? 'Know More' : 'Per Saperne Di Pi??'}
        </Typography>
        <ExpandMoreIcon className={classes.arrow} />
      </Link>
    </Box>
    /*  End Of Main Container */
  );
}

export default Hero;
