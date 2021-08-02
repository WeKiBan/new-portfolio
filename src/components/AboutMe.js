import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import computer from '../images/computer.jpg';
import Grid from '@material-ui/core/Grid';
import { aboutData } from '../data'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(5, 0),
  },
  container: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#4731d4',
    fontFamily: 'Raleway',
    fontWeight: '400',
    paddingBottom: theme.spacing(2),
  },
  computerImage: {
    maxWidth: '350px',
    borderRadius: '50%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '70%',
    },
  },
  info: {
    padding: theme.spacing(2, 0),
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
  },
  waveBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
}));

function AboutMe() {
  const classes = useStyles();

  return (
    <Box
      id="about-section"
      data-aos="fade"
      data-aos-once="true"
      ease-in="true"
      animation-duration="500"
      className={classes.wrapper}
    >
      <Typography className={classes.heading} variant="h4">
        About Me
      </Typography>
      <Grid container className={classes.container}>
        <Grid className={classes.gridItem} item md={6} sm={12}>
          <img
            src={computer}
            className={classes.computerImage}
            alt="computer"
          />
        </Grid>

        <Grid md={6} sm={12} item className={classes.gridItem}>
          {aboutData.info.map((paragraph) => (
            <Typography className={classes.info}>{paragraph}</Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutMe;
