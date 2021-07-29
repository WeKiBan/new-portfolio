import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Tilt from 'react-tilt';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    fontFamily: 'Raleway',
    fontWeight: '400',
    width: '90%',
    padding: theme.spacing(2, 1),
    color: '#4d5156',
  },
  imgContainer: {
    cursor: 'pointer',
    padding: theme.spacing(1),
  },
  infoContainer: {
    padding: theme.spacing(1),
  },
}));

function ProjectTile({ data }) {
  const classes = useStyles();
  const { img, title, info, info2, url, repo } = data;
  return (
    <Grid className={classes.wrapper} container>
      <Grid className={classes.infoContainer} item xs={12} sm={4}>
        <Typography gutterBottom variant="h5" color="initial">
          {title}
        </Typography>
        <Typography gutterBottom color="initial">
          {info}
        </Typography>
        <Typography gutterBottom color="initial">
          {info2}
        </Typography>
      </Grid>
      <Grid className={classes.imgContainer} item xs={12} sm={8}>
        <Tilt
          options={{
            reverse: false,
            max: 10,
            perspective: 1000,
            scale: 1,
            speed: 300,
            transition: true,
            axis: null,
            reset: true,
            easing: 'cubic-bezier(.03,.98,.52,.99)',
          }}
        >
          <img src={img} alt="website screenshot" />
        </Tilt>
        <Box>
          <Button color="secondary" variant="contained">
            See Live
          </Button>
          <Button>Source Code</Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ProjectTile;
