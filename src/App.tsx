import {
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
} from '@mui/material';

import { RouterProvider } from 'react-router-dom';
import router from './components/Routes';
import { ApolloProvider } from '@apollo/client';
import { client } from './constants/apollo-client';
import { Guard } from './components/auth/Guard';
import { Header } from './components/header/Header';
import { Snackbar } from './components/snackbar/Snackbar';
import { ChatList } from './components/chat-list/ChatList';
import { usePath } from './hooks/usePath';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const { path } = usePath();
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <Guard>
          <Grid container>
            <Grid item md={3}>
              <ChatList />
            </Grid>
            <Grid item md={9}>
              <Container>
                <RouterProvider router={router} />
              </Container>
            </Grid>
          </Grid>
        </Guard>
        <Snackbar />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
