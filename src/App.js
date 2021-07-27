import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import './App.scss';
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
      </div>
    </ThemeProvider>
  );
}

export default App;
