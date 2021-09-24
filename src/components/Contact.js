import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { IconButton } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 300,
  },
  arrow: {
    transform: 'rotate(90deg)',
  },
  button: {
    animation: 'bounce 0.6s infinite alternate',
    cursor: 'pointer',
    transition: '0.3s',
  },
  icon: {
    fontSize: 35,
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <IconButton
      color="primary"
        href="#hero"
        className={`${classes.button} animate__animated animate__bounces`}
      >
        <ArrowBackIosIcon className={classes.arrow} />
      </IconButton>
      <Typography style={{ color: 'orange' }} variant="h2">
        Contact Me
      </Typography>
      <Typography style={{ color: 'white' }}>
        Have a question or want to work with me? Please get in touch!
      </Typography>
      <Box>
        <IconButton color="primary">
          <MailOutlineIcon className={classes.icon} />
        </IconButton>
        <IconButton color="primary">
          <LinkedInIcon className={classes.icon} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Contact;
