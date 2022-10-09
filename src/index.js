import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import './index.css';

const theme = {
  colors: {
    black: 'black',
    white: 'white',
    green: 'green',
    red: 'red',
    background: 'goldenrod',
    border: 'silver',
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
