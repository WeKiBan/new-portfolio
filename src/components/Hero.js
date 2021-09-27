import React, { useState, useEffect } from 'react';
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
import { Link } from 'react-scroll';
import background from '../images/bg-computer.jpg';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background})`,
    backgroundRepeat: ' no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    position: 'fixed',
    zIndex: -1,
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
    [theme.breakpoints.down('md')]: {
      fontSize: 50,
    },
    [theme.breakpoints.down('sm')]: {
      '@media (orientation: landscape)': {
        fontSize: 40,
      },
    },
  },
  heading: {
    fontFamily: 'Raleway',
    fontWeight: 500,
    fontSize: 40,
    [theme.breakpoints.up('sm')]: {
      fontSize: 60,
    },
    [theme.breakpoints.down('md')]: {
      '@media (orientation: landscape)': {
        fontSize: 40,
      },
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
      color: '#63A46C',
    },
  },
  knowMore: {
    fontSize: 20,
  },
}));

function Hero() {
  const classes = useStyles();

  const [addressBarHeight, setAddressBarHeight] = useState('');

  const getScrollBarSize = () => {
    var inner = document.createElement('p');
    inner.style.width = '100%';
    inner.style.height = '100%';

    var outer = document.createElement('div');
    outer.style.position = 'absolute';
    outer.style.top = '0px';
    outer.style.left = '0px';
    outer.style.visibility = 'hidden';
    outer.style.width = '100px';
    outer.style.height = '100px';
    outer.style.overflow = 'hidden';
    outer.appendChild(inner);

    document.body.appendChild(outer);

    var w1 = inner.offsetWidth;
    var h1 = inner.offsetHeight;
    outer.style.overflow = 'scroll';
    var w2 = inner.offsetWidth;
    var h2 = inner.offsetHeight;
    if (w1 === w2) w2 = outer.clientWidth;
    if (h1 === h2) h2 = outer.clientHeight;

    document.body.removeChild(outer);

    return [w1 - w2, h1 - h2];
  };

  useEffect(() => {
    const height = getScrollBarSize();
    setAddressBarHeight(height);
  }, []);

  return (
    <Box
      style={{ height: `calc(100vh - ${addressBarHeight})` }}
      id="hero"
      className={classes.wrapper}
    >
      <div
        style={{ height: `calc(100vh - ${addressBarHeight})` }}
        className={classes.bg}
      ></div>
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
            Hello,
          </Typography>

          <Typography
            className={classes.heading}
            color="secondary"
            variant="h3"
          >
            I'm Wes Banyard.
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
        <Typography className={classes.knowMore}>Know More</Typography>
        <ExpandMoreIcon className={classes.arrow} />
      </Link>
    </Box>
    /*  End Of Main Container */
  );
}

export default Hero;
