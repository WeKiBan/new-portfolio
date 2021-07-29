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

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#4731d4',
    margin: 0,
    padding: theme.spacing(2),
    color: '#c9ee87',
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
    color: '#c9ee87',
    padding: 0,
    margin: 0,
  },
  logo: {
    textAlign: 'center',
  },
}));

function Skills() {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Typography className={classes.heading} variant="h4">
        Skills
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
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="200"
          ease-in="true"
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={2}
        >
          <FontAwesomeIcon icon={faCss3} />
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="300"
          ease-in="true"
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={2}
        >
          <FontAwesomeIcon icon={faJsSquare} />
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="400"
          ease-in="true"
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={2}
        >
          <FontAwesomeIcon icon={faBootstrap} />
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="500"
          ease-in="true"
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={2}
        >
          <FontAwesomeIcon icon={faSass} />
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="600"
          ease-in="true"
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={2}
        >
          <FontAwesomeIcon icon={faReact} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Skills;
