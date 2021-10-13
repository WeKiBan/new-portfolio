import { nanoid } from 'nanoid';
import CvGenerator from './images/CV_Generator.png';
import pbTimer from './images/pbtimer.png';
import spoonly from './images/Spoonly.png';
import taski from './images/taski.png';
import weather from './images/weather.png';
import room from './images/Room.png';

// ABOUT DATA
export const aboutData = {
  img: '.profile.jpg',
  info: [
    "I'm Wes, a web developer from the West Midlands currently living in Milan, Italy. I'm passionate about tech and I love creating innovative applications that make people's lives easier. I find learning new technologies and creating solutions to difficult problems massively rewarding.",
    'At the moment my evenings are spent improving my depth of knowledge with React and Material UI. My long term goal is to become an effective full stack developer, able to efficiently turn great ideas into working products.',
  ],
};

// PROJECTS DATA
export const projectData = [
  {
    id: nanoid(),
    img: room,
    title: 'Landing Page For Furniture Website',
    info: 'Landing Page For Furniture Website built with React, and styled components and  React Hooks',
    info2: 'React, React Hooks and Styled Components',
    url: 'https://wekiban.github.io/room/',
    repo: 'https://github.com/WeKiBan/Room',
  },
  {
    id: nanoid(),
    img: spoonly,
    title: 'Recipe Search Application',
    info: 'A recipe search application utilizing React, Material UI, React Hooks, The Context API, Edamam external recipe api.',
    info2: 'React, React Hooks, Material UI, Context API',
    url: 'https://spoonly.netlify.app',
    repo: 'https://github.com/WeKiBan/recipe-website',
  },
  {
    id: nanoid(),
    img: CvGenerator,
    title: 'React CV Generator App',
    info: 'A React Application which generates and prints a CV from user entered data. Utilizes controlled forms and React Hooks',
    info2: 'React, SASS',
    url: 'https://wekiban.github.io/CV_App/',
    repo: 'https://github.com/WeKiBan/CV_App',
  },
  {
    id: nanoid(),
    img: taski,
    title: 'Taski',
    info: 'A Todo list App built using Vanilla JS and Bootstrap',
    info2: 'Javascript, Bootstrap',
    url: 'https://wekiban.github.io/Taski/',
    repo: 'https://github.com/WeKiBan/Taski',
  },
  {
    id: nanoid(),
    img: pbTimer,
    title: 'PB Timer',
    info: "As I love to solve the Rubik's cube in my spare time I decided to build this application using Vanilla JS to keep track of my times.",
    info2: 'Javascript',
    url: 'https://wekiban.github.io/Rubiks-cube-timer/',
    repo: 'https://github.com/WeKiBan/Rubiks-cube-timer',
  },
  {
    id: nanoid(),
    img: weather,
    title: 'Weather App',
    info: "A web application which dynamically displays the present weather at the user's favourite locations around the globe, from an array of locations which is persisted in local storage.",
    info2: 'Javascript, Bootstrap, OpenWeatherAPI',
    url: 'https://wekiban.github.io/weather-app-2/',
    repo: 'https://github.com/WeKiBan/weather-app-2',
  },
];

// FOOTER DATA
export const contactData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/wes-banyard/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/WeKiBan',
    },
  ],
};
