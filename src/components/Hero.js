import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import 'aos/dist/aos.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import { Link } from 'react-scroll';
import background from '../images/bg-computer.jpg';

var isMobile = false; //initiate as false
// device detection
if (
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent
  ) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4)
  )
) {
  isMobile = true;
}

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bg: {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background})`,
    backgroundRepeat: ' no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
    position: 'fixed',
    zIndex: -1,
  },
  nav: {
    position: 'absolute',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    top: 0,
    width: '100%',
    padding: theme.spacing(1),
    '@media (orientation: landscape)': {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      height: '100%',
    },
  },
  navLink: {
    color: 'orange',
    '&:hover': {
      color: '#63A46C',
    },
  },
  navIcon: {
    fontSize: '45px',
  },
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (orientation: landscape)': {
      width: '70%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    [theme.breakpoints.up('md')]: {
      width: '70%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
  },

  textContainer: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    },
    '@media (orientation: landscape)': {
      textAlign: 'left',
    },
  },
  hello: {
    color: 'white',
    [theme.breakpoints.down('md')]: {
      fontSize: 50,
    },
    [theme.breakpoints.down('sm')]: {
      '@media (orientation: landscape)': {
        fontSize: 40,
      },
    },
  },
  heading: {
    fontFamily: 'Raleway',
    fontWeight: 500,
    fontSize: 40,
    [theme.breakpoints.up('sm')]: {
      fontSize: 60,
    },
    [theme.breakpoints.down('md')]: {
      '@media (orientation: landscape)': {
        fontSize: 40,
      },
    },
  },
  subheading: {
    color: '#f4f4f4',
  },
  button: {
    zIndex: 1000,
    textDecoration: 'none',
    position: 'absolute',
    display: 'flex !important',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: '20px',
    animation: 'bounce 0.6s infinite alternate',
    cursor: 'pointer',
    color: 'orange',
    transition: '0.3s',
    '&:hover': {
      transform: 'scale(1.2)',
      color: '#63A46C',
    },
  },
  knowMore: {
    fontSize: 20,
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <Box id="hero" className={classes.wrapper}>
      <div className={classes.bg}></div>
      {/* Start of Nav */}
      <Box data-aos="fade" data-aos-once="true" className={classes.nav}>
        <IconButton
          href="#projects"
          data-aos="fade"
          data-aos-once="true"
          ease-in="true"
          className={classes.navLink}
        >
          <WorkOutlineIcon className={classes.navIcon} />
        </IconButton>
        <IconButton
          className={classes.navLink}
          href="#"
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay="100"
          ease-in="true"
        >
          <MailOutlineIcon className={classes.navIcon} />
        </IconButton>
        <IconButton
          className={classes.navLink}
          target="_blank"
          href="https://github.com/Wekiban"
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay="200"
          ease-in="true"
        >
          <GitHubIcon className={classes.navIcon} />
        </IconButton>
        <IconButton
          target="_blank"
          href="https://www.linkedin.com/in/wes-banyard/"
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay="300"
          ease-in="true"
          className={classes.navLink}
        >
          <LinkedInIcon className={classes.navIcon} />
        </IconButton>
      </Box>
      {/* End of Nav */}
      {/* Start Of Main Container */}
      <Box className={classes.container}>
        <Box
          data-aos="fade"
          data-aos-once="true"
          data-aos-delay="300"
          ease-in="true"
          className={classes.textContainer}
        >
          <Typography color="primary" variant="h1" className={classes.hello}>
            Hello,
          </Typography>

          <Typography
            className={classes.heading}
            color="secondary"
            variant="h3"
          >
            I'm Wes Banyard.
          </Typography>
          <Typography className={classes.subheading} variant="h5">
            Front End Developer
          </Typography>
        </Box>
      </Box>
      <Link
        to="about-section"
        className={`${classes.button} animate__animated animate__bounces`}
      >
        <Typography className={classes.knowMore}>Know More</Typography>
        <ExpandMoreIcon className={classes.arrow} />
      </Link>
    </Box>
    /*  End Of Main Container */
  );
}

export default Hero;
