import Hero from './components/heroComponent/Hero';
import 'animate.css/animate.min.css';
import './App.scss';
import theme from './theme';
import { ThemeProvider } from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Hero />
      </div>
    </ThemeProvider>
  );
}

export default App;
