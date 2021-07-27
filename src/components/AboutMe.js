import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import computer from '../images/computer.jpg';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(5, 1),
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
}));

function AboutMe() {
  const classes = useStyles();

  return (
    <Box
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="500"
      ease-in
      className={classes.wrapper}
    >
      <Typography className={classes.heading} variant="h3">
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
          <Typography className={classes.info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            blanditiis debitis suscipit itaque repellendus voluptas sapiente,
            excepturi cupiditate! Maxime suscipit ipsam veritatis incidunt
            tenetur facere facilis, perferendis eius ullam impedit reiciendis
            ratione.
          </Typography>
          <Typography className={classes.info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            blanditiis debitis suscipit itaque repellendus voluptas sapiente,
            excepturi cupiditate! Maxime suscipit ipsam veritatis incidunt
            tenetur facere facilis, perferendis eius ullam impedit reiciendis
            ratione.
          </Typography>
          <Typography className={classes.info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            blanditiis debitis suscipit itaque repellendus voluptas sapiente.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutMe;
