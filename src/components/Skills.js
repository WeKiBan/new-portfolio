import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faBootstrap,
  faSass,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import Grid from '@material-ui/core/Grid';
import { Icon } from '@iconify/react';
import nextIcon from '../images/nextIcon.svg';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#333333',
    margin: 0,
    padding: theme.spacing(2),
    color: 'orange',
  },
  waveTop: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  heading: {
    padding: theme.spacing(2),
    fontWeight: 400,
  },
  skills: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    maxWidth: 900,
    fontSize: '5rem !important',
    color: 'orange',
    padding: 0,
    margin: 0,
    paddingBottom: theme.spacing(4),
  },
  logo: {
    textAlign: 'center',
  },
  svgIcon: {
    width: '100px',
  },
}));

function Skills({ english }) {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.heading} variant="h4">
        {english ? 'Skills' : 'Abilità'}
      </Typography>
      <Grid container className={classes.skills}>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="100"
          ease-in="true"
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={2}
        >
          <FontAwesomeIcon icon={faHtml5} />
          <Typography>HTML5</Typography>
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          ease-in="true"
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={2}
        >
          <FontAwesomeIcon icon={faCss3} />
          <Typography>CSS</Typography>
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          ease-in="true"
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={2}
        >
          <FontAwesomeIcon icon={faJsSquare} />
          <Typography>JavaScript</Typography>
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          ease-in="true"
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={2}
        >
          <FontAwesomeIcon icon={faBootstrap} />
          <Typography>Bootstrap</Typography>
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          ease-in="true"
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={2}
        >
          <FontAwesomeIcon icon={faSass} />
          <Typography>SASS</Typography>
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          ease-in="true"
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={2}
        >
          <FontAwesomeIcon icon={faReact} />
          <Typography>React</Typography>
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          ease-in="true"
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={2}
        >
          <img className={classes.svgIcon} src={nextIcon} alt="Next JS Icon" />
          <Typography>Next.js</Typography>
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          ease-in="true"
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={2}
        >
          <Icon icon="mdi:material-ui" styles={{ color: 'orange' }} />
          <Typography>Material UI</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Skills;
