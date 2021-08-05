import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  Aos.init();
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
