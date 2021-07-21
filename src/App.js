import Hero from './components/heroComponent/Hero';
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
      </div>
    </ThemeProvider>
  );
}

export default App;
