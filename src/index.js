import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import './index.css';
import {App} from './components/App/App';
const theme = {
  fontsize: {
    mainFontSize: '28px',
    secondFontSize: '16px',
  },
  fontcolor: {
    textColor: '#010101',
    textColorContrast: '#fff',
    profileTextColor: '#b1b0b0',
  },
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
<App />
    </ThemeProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/* reportWebVitals(); */

