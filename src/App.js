// import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import colorToken from './Color.json'
import SearchPaper from './Components/SearchPaper/SearchPaper';



const theme = createTheme({
  palette: {
    secondary: {
      main: colorToken.secondary
    },
    primary:{
      main: colorToken.primary
    },
    text:{
      primary:"#800000"
    }
  }
});

function App() {



  return (
    <ThemeProvider theme={theme}>
      <div
        className="app-margin"
      >
        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
        <SearchPaper />
      </div>
    </ThemeProvider>
  );
}

export default App;
