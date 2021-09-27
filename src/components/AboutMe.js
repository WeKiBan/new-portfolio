import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import portrait from '../images/portrait.jpeg';
import { aboutData } from '../data';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: theme.spacing(5),
    background: '#333333',
  },
  container: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  portrait: {
    maxWidth: 280,
    borderRadius: '50%',
    marginRight: 50,
    [theme.breakpoints.down('md')]: {
      marginRight: 0,
    },
    [theme.breakpoints.down('sm')]: {
      maxWidth: 230,
    },
  },
  info: {
    padding: theme.spacing(2, 0),
    color: '#f4f4f4',
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
    <Box id="about-section" className={classes.wrapper}>
      <Box
        data-aos="fade"
        data-aos-once="true"
        ease-in="true"
        animation-duration="500"
        container
        className={classes.container}
      >
        <Box className={classes.gridItem}>
          <img className={classes.portrait} src={portrait} alt="my portrait" />
        </Box>

        <Box className={classes.gridItem}>
          {aboutData.info.map((paragraph, index) => (
            <Typography key={index} className={classes.info}>
              {paragraph}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default AboutMe;
