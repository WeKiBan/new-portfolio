import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, Typography } from '@material-ui/core';
import ProjectTile from './ProjectTile';
import { projectData } from '../data';
const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    background: '#EEEEEE',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    [theme.breakpoints.down('sm')]: {
      paddingTop: 60,
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(1),
    width: '100%',
    maxWidth: 1200,
  },
  heading: {
    color: '#333333',
    fontWeight: '200',
    borderBottom: '2px solid orange',
    paddingBottom: '5px',
  },
  waveTop: {
    position: 'absolute',
    width: '100%',
    top: -1,
  },
}));

function Projects() {
  const classes = useStyles();
  return (
    <Box className={classes.wrapper} id="projects">
      <svg
        className={classes.waveTop}
        viewBox="0 0 500 150"
        preserveAspectRatio="none"
      >
        <path
          fill="#333333"
          fillOpacity="1"
          d="M-59.81,-46.88 C130.92,142.59 171.56,-112.98 568.85,74.50 L500.00,0.00 L0.00,0.00 Z"
        ></path>
      </svg>
      <Typography className={classes.heading} variant="h4">
        Projects
      </Typography>
      <Box className={classes.container}>
        {projectData.map((project) => {
          return <ProjectTile key={project.id} data={project} />;
        })}
      </Box>
    </Box>
  );
}

export default Projects;
