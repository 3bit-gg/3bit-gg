import ResponsiveAppBar from './ResponsiveAppBar';
import HeroSection from './HeroSection';
import GameplaySection from './GameplaySection';
import GameplayVideoSection from './GameplayVideoSection';
import AboutUsSection from './AboutUsSection';
import Footer from './Footer';
import { createTheme, ThemeProvider, ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#6D66FF',
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
  shadows: ["none"]
};

const theme = createTheme(themeOptions);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ResponsiveAppBar/>
        <HeroSection/>
        <GameplaySection/>
        <GameplayVideoSection/>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;