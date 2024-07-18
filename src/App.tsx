import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container>
        <h1>Hello world!</h1>
      </Container>
    </ThemeProvider>
  );
}

export default App;
