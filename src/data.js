import { 
  nanoid } from 
  'nanoid';
  
  import 
  CvGenerator from 
  './images/CV_Generator.png';
  
  import 
  pbTimer from 
  './images/pbtimer.png';
  
  import 
  spoonly from 
  './images/Spoonly.png';
  
  import 
  taski from 
  './images/taski.png';
  
  import 
  weather from 
  './images/weather.png';
  
  import 
  room from 
  './images/Room.png';
  
  import 
  portfolio from 
  './images/portfolio.png';
  
  
  
  // ABOUT DATA
  
  export 
  const aboutData = {
  
  img: 
  '.profile.jpg',
  
  info: [
  
  [
  
  'Sono Wes, uno sviluppatore web del West Midlands, Inghilterra, che attualmente vive a Milano. Sono appassionato di tecnologia e amo creare applicazioni innovative che semplifichino la vita delle persone. Trovo l'apprendimento
  di nuove tecnologie e la creazione di soluzioni a problemi difficili estremamente gratificante.',
  
  'Al momento trascorro le mie serate a migliorare la mia conoscenza di React e Material UI. Il mio obiettivo a lungo termine è diventare uno sviluppatore full stack efficente, in grado di trasformare in modo efficace grandi
  idee in prodotti funzionanti.',
  
  ],
  
  [
  
  "I'm Wes, a web developer from the West Midlands currently living in Milan, Italy. I'm passionate about tech and I love creating innovative applications that make people's lives easier. I find learning new technologies
  and creating solutions to difficult problems massively rewarding.",
  
  'At the moment my evenings are spent improving my depth of knowledge with React and Material UI. My long term goal is to become an effective full stack developer, able to efficiently turn great ideas into working products.',
  
  ],
  
  ],
  
  };
  
  
  
  // PROJECTS DATA
  
  export 
  const projectData = [
  
  {
  
  id: 
  nanoid(),
  
  img: 
  room,
  
  title: [
  
  'Pagina di destinazione per un sito web di mobili',
  
  'Landing Page For Furniture Website',
  
  ],
  
  info: [
  
  'Pagina per un sito Web di mobili costruita con React, Styled Components e React Hooks',
  
  'Landing Page For Furniture Website built with React, and styled components and React Hooks',
  
  ],
  
  info2: 
  'React, React Hooks and Styled Components',
  
  url: 
  'https://wekiban.github.io/Room/',
  
  repo: 
  'https://github.com/WeKiBan/Room',
  
  },
  
  {
  
  id: 
  nanoid(),
  
  img: 
  portfolio,
  
  title: ['Questo portfolio',
  'This Portfolio'],
  
  info: [
  
  'Una vetrina di alcuni dei miei lavori realizzati con React e Material-UI',
  
  'A showcase of some of my work built with React and Material-UI',
  
  ],
  
  info2: 
  'React, React Hooks and Material-UI',
  
  url: 
  'https://wesbanyard.dev',
  
  repo: 
  'https://github.com/WeKiBan/new-portfolio',
  
  },
  
  {
  
  id: 
  nanoid(),
  
  img: 
  spoonly,
  
  title: [
  
  'Applicazione per la ricerca di ricette',
  
  'Recipe Search Application',
  
  ],
  
  info: [
  
  "Un'applicazione per la ricerca di ricette che utilizza React, Material UI, React Hooks, The Context API, edamam external ricetta api.",
  
  'A recipe search application utilizing React, Material UI, React Hooks, The Context API, Ricette da Edamam api.',
  
  ],
  
  info2: 
  'React, React Hooks, Material UI, Context API',
  
  url: 
  'https://spoonly.netlify.app',
  
  repo: 
  'https://github.com/WeKiBan/recipe-website',
  
  },
  
  {
  
  id: 
  nanoid(),
  
  img: 
  CvGenerator,
  
  title: ['App React generatore di CV',
  'React CV Generator App'],
  
  info: [
  
  "Un'applicazione React che genera e stampa un CV dai dati inseriti dall'utente. Utilizza forme controllate e React Hooks",
  
  'A React Application which generates and prints a CV from user entered data. Utilizes controlled forms and React Hooks',
  
  ],
  
  info2:
  'React, SASS, HTML',
  
  url:
  'https://wekiban.github.io/CV_App/',
  
  repo:
  'https://github.com/WeKiBan/CV_App',
  
  },
  
  {
  
  id:
  nanoid(),
  
  img:
  taski,
  
  title: ['Taski',
  'Taski'],
  
  info: [
  
  "Un'app per la lista delle cose da fare creata utilizzando Vanilla JS e Bootstrap",
  
  'A Todo list App built using Vanilla JS and Bootstrap',
  
  ],
  
  info2:
  'Javascript, Bootstrap, HTML, CSS',
  
  url:
  'https://wekiban.github.io/Taski/',
  
  repo:
  'https://github.com/WeKiBan/Taski',
  
  },
  
  {
  
  id:
  nanoid(),
  
  img:
  pbTimer,
  
  title: ['PB Timer',
  'PB Timer'],
  
  info: [
  
  'Dato che amo risolvere il cubo di Rubik nel mio tempo libero, ho deciso di creare questa applicazione utilizzando Vanilla JS per tenere traccia dei miei tempi.',
  
  "As I love to solve the Rubik's cube in my spare time I decided to build this application using Vanilla JS to keep track of my times.",
  
  ],
  
  info2:
  'Javascript, HTML, CSS',
  
  url:
  'https://wekiban.github.io/Rubiks-cube-timer/',
  
  repo:
  'https://github.com/WeKiBan/Rubiks-cube-timer',
  
  },
  
  {
  
  id:
  nanoid(),
  
  img:
  weather,
  
  title: ['Weather App',
  'App Meteo'],
  
  info: [
  
  "Un'applicazione web che mostra in modo dinamico il meteo presente nelle località preferite dell'utente in tutto il mondo, da una serie di località che è conservata nell'archiviazione locale",
  
  "A web application which dynamically displays the present weather at the user's favorite locations around the globe, from an array of locations which is persisted in local storage.",
  
  ],
  
  info2:
  'Javascript, Bootstrap, HTML, CSS OpenWeatherAPI',
  
  url:
  'https://wekiban.github.io/weather-app-2/',
  
  repo:
  'https://github.com/WeKiBan/weather-app-2',
  
  },
  
  ];
  
  
  
  // FOOTER DATA
  
  export 
  const contactData = {
  
  networks: [
  
  {
  
  id:
  nanoid(),
  
  name:
  'linkedin',
  
  url:
  'https://www.linkedin.com/in/wes-banyard/',
  
  },
  
  {
  
  id:
  nanoid(),
  
  name:
  'github',
  
  url:
  'https://github.com/WeKiBan',
  
  },
  
  ],
  
  };