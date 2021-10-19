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
    minHeight: 220,
  },
  arrow: {
    transform: 'rotate(90deg)',
  },
  info: {
    maxWidth: '80%',
    textAlign: 'center',
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

function Contact({ english }) {
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
      <Typography style={{ color: 'orange', fontWeight: 100 }} variant="h4">
        {english ? 'Contact Me' : 'Contattami'}
      </Typography>
      <Typography className={classes.info} style={{ color: 'white' }}>
        {english
          ? 'Have a question or want to work with me? Please get in touch!'
          : 'Hai una domanda o vuoi lavorare con me? Si prega di mettersi in contatto!'}
      </Typography>
      <Box>
        <IconButton href="mailto:wes.banyard@googlemail.com" color="secondary">
          <MailOutlineIcon className={classes.icon} />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/wes-banyard/"
          color="secondary"
        >
          <LinkedInIcon className={classes.icon} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Contact;
