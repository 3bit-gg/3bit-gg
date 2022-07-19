import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footer';
import Home from './Home';
import Play from './Play';
import Bitdex from './Bitdex';
import Downloads from './Downloads';
import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#6D66FF',
    },
    card: {
      background: '#484848',
      health: '#FF6D5F',
      energy: '#00FFFC',
      abilityInfoBackground: 'rgba(0,0,0,0.2)',
      abilityInfoDescriptionText: 'rgba(255,255,255,0.5)'
    },
    white: {
      main: '#FFFFFF',
    },
    light: {
      main: '#807AFF',
      dark: '#948FFF'
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#1a1a1a',
      paper: '#272727',
    },
    divider: 'rgba(255,255,255,0.05)',
    text: {
      primary: '#ffffff',
      secondary: '#ffffff',
      disabled: '#ffffff',
      hint: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Dosis", "Helvetica", "Arial", sans-serif',
    fontSize: 20,
    color: 'white'
  },
  shape: {
    borderRadius: 10,
  },
  overrides: {
    MuiAppBar: {
      colorInherit: {
        backgroundColor: '#6D66FF',
        color: '#fff',
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
    },
  },
};

const theme = createTheme(themeOptions);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>

        <Router>
            <ResponsiveAppBar/>
            <Routes>
              <Route path="/" element={<Home/>} exact />
              <Route path="/play" element={<Play/>} />
              <Route path="/bitdex" element={<Bitdex/>} />
              <Route path="/downloads" element={<Downloads/>} />
            </Routes>
            <Footer/>
        </Router>
       
      </ThemeProvider>
    </div>
  );
}

export default App;