import { nanoid } from 'nanoid';

// ABOUT DATA
export const aboutData = {
  img: '.profile.jpg',
  info: [
    [
      "Sono Wes, uno sviluppatore web del West Midlands, Inghilterra, che attualmente vive a Milano. Sono appassionato di tecnologia e amo creare applicazioni innovative che semplifichino la vita delle persone. Trovo l'apprendimento di nuove tecnologie e la creazione di soluzioni a problemi difficili estremamente gratificante.",
      'Al momento trascorro le mie serate a migliorare la mia conoscenza di React e NextJS. Il mio obiettivo a lungo termine è diventare uno sviluppatore full stack efficente, in grado di trasformare in modo efficace grandi idee in prodotti funzionanti.',
    ],
    [
      "I'm Wes, a web developer from the West Midlands currently living in Milan, Italy. I'm passionate about tech and I love creating innovative applications that make people's lives easier. I find learning new technologies and creating solutions to difficult problems massively rewarding.",
      'At the moment my evenings are spent improving my depth of knowledge with React and NextJS. My long term goal is to become an effective full stack developer, able to efficiently turn great ideas into working products.',
    ],
  ],
};

// PROJECTS DATA
export const projectData = [
  {
    id: nanoid(),
    img: 'https://ucarecdn.com/f5e26ba6-5404-40f1-ae42-383b49eb5e53/-/preview/-/quality/smart/',
    title: ['Rest Countries API App', 'Rest Countries API App'],
    info: [
      "Applicazione creata utilizzando l'API Rest Countries. L'utente è in grado di cercare singoli paesi e quindi selezionare quel paese per vedere ulteriori dettagli",
      'An application created using the rest countries API. The user is able to search for individual countries and then select that country to see further details',
    ],
    info2:
      'NextJS, React, React Hooks, Styled Components, Netlify, Rest Countries API',
    url: 'https://restcountrysearch.netlify.app/',
    repo: 'https://github.com/WeKiBan/countries_app',
  },
  {
    id: nanoid(),
    img: 'https://ucarecdn.com/2b38028f-e1b9-4fab-a3db-0453409edcf0/-/preview/-/quality/smart/',
    title: [
      'App per il monitoraggio degli indirizzi IP',
      'IP Address Tracker App',
    ],
    info: [
      "Applicazione che tiene traccia della posizione di un indirizzo IP fornito dall'utente",
      'An application which tracks the location of an IP address provided by the user',
    ],
    info2: 'React, React Hooks, Styled Components, Netlify, Leaflet, IPify API',
    url: 'https://address-tracker-app.netlify.app/',
    repo: 'https://github.com/WeKiBan/ip-address-tracker',
  },
  {
    id: nanoid(),
    img: 'https://ucarecdn.com/70598e99-9dac-4031-ac0e-4b83adad828a/-/preview/-/quality/smart/',
    title: [
      'Pagina di destinazione per un sito web di mobili',
      'Landing Page For Furniture Website',
    ],
    info: [
      'Pagina per un sito Web di mobili costruita con React, Styled Components e React Hooks',
      'Landing Page For Furniture Website built with React, Styled-Components and  React Hooks',
    ],
    info2: 'React, React Hooks and Styled Components',
    url: 'https://wekiban.github.io/Room/',
    repo: 'https://github.com/WeKiBan/Room',
  },
  {
    id: nanoid(),
    img: 'https://ucarecdn.com/9eb0e3d8-59b1-4bfa-821d-729cbcfbcc1e/-/preview/-/quality/smart/',
    title: ['Questo Portfolio', 'This Portfolio'],
    info: [
      'Una vetrina di alcuni dei miei lavori realizzati con React e Material-UI',
      'A showcase of some of my work built with React and Material-UI',
    ],
    info2: 'React, React Hooks, Material-UI',
    url: 'https://wesbanyard.dev',
    repo: 'https://github.com/WeKiBan/new-portfolio',
  },
  {
    id: nanoid(),
    img: 'https://ucarecdn.com/52f244c6-53fa-4ec8-b513-3916f36fe992/-/preview/-/quality/smart/',
    title: [
      'Applicazione per la ricerca di ricette',
      'Recipe Search Application',
    ],
    info: [
      "Un'applicazione per la ricerca di ricette che utilizza React, Material UI, React Hooks, The Context API, edamam external ricetta api.",
    ],
    info2: 'React, React Hooks, Material UI, Context API',
    url: 'https://spoonly.netlify.app',
    repo: 'https://github.com/WeKiBan/recipe-website',
  },
  {
    id: nanoid(),
    img: 'https://ucarecdn.com/185e4f38-7029-4804-87e4-f50db9c037d7/-/preview/-/quality/smart/',
    title: ['App React generatore di CV', 'React CV Generator App'],
    info: [
      "Un'applicazione React che genera e stampa un CV dai dati inseriti dall'utente. Utilizza forme controllate e React Hooks",
      'A React Application which generates and prints a CV from user entered data. Utilizes controlled forms and React Hooks',
    ],
    info2: 'React, SASS, HTML',
    url: 'https://wekiban.github.io/CV_App/',
    repo: 'https://github.com/WeKiBan/CV_App',
  },
  {
    id: nanoid(),
    img: 'https://ucarecdn.com/2f01e60c-afb3-4227-9ce7-1c3c707351e4/-/preview/-/quality/smart/',
    title: ['Taski', 'Taski'],
    info: [
      "Un'app per la lista delle cose da fare creata utilizzando Vanilla JS e Bootstrap",
      'A Todo list App built using Vanilla JS and Bootstrap',
    ],
    info2: 'Javascript, Bootstrap, HTML, CSS',
    url: 'https://wekiban.github.io/Taski/',
    repo: 'https://github.com/WeKiBan/Taski',
  },
  {
    id: nanoid(),
    img: 'https://ucarecdn.com/80b9b7e8-3113-44e3-a3dd-ca1ea145c1b9/-/preview/-/quality/smart/',
    title: ['PB Timer', 'PB Timer'],
    info: [
      'Dato che amo risolvere il cubo di Rubik nel mio tempo libero, ho deciso di creare questa applicazione utilizzando Vanilla JS per tenere traccia dei miei tempi.',
      "As I love to solve the Rubik's cube in my spare time I decided to build this application using Vanilla JS to keep track of my times.",
    ],
    info2: 'Javascript, HTML, CSS',
    url: 'https://wekiban.github.io/Rubiks-cube-timer/',
    repo: 'https://github.com/WeKiBan/Rubiks-cube-timer',
  },
  {
    id: nanoid(),
    img: 'https://ucarecdn.com/23bbe2dc-56f4-46c6-8c97-5220d43e582b/-/preview/-/quality/smart/',
    title: ['Weather App', 'App Meteo'],
    info: [
      "Un'applicazione web che mostra in modo dinamico il meteo presente nelle località preferite dell'utente in tutto il mondo, da una serie di località che è conservata nell'archiviazione locale",
      "A web application which dynamically displays the present weather at the user's favorite locations around the globe, from an array of locations which is persisted in local storage.",
    ],
    info2: 'Javascript, Bootstrap, HTML, CSS OpenWeatherAPI',
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
