import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#c9ee87',
  },
  skills: {
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    maxWidth: 900,
    padding: theme.spacing(5),
    fontSize: '5rem !important',
    color: '#4731d4',
  },
  logo: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
}));

function Skills() {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper}>
      <Grid container className={classes.skills}>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="100"
          ease-in
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={3}
        >
          <FontAwesomeIcon icon={faHtml5} />
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="200"
          ease-in
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={3}
        >
          <FontAwesomeIcon icon={faCss3} />
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="300"
          ease-in
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={3}
        >
          <FontAwesomeIcon icon={faJsSquare} />
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="400"
          ease-in
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={3}
        >
          <FontAwesomeIcon icon={faBootstrap} />
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="500"
          ease-in
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={3}
        >
          <FontAwesomeIcon icon={faSass} />
        </Grid>
        <Grid
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-duration="500"
          data-aos-delay="600"
          ease-in
          item
          className={classes.logo}
          xs={6}
          sm={4}
          md={3}
        >
          <FontAwesomeIcon icon={faReact} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Skills;
