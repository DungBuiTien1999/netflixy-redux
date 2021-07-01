import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../store';
// import DevTools from './DevTools';
import StyledContainer from '../styled/StyledContainer';
import InjectGlobalStyles from '../injectGlobalStyles';
import theme from '../constants/theme';
import App from '../components/App';

const Root = () => {
  return (
    <Provider store={store}>
      <InjectGlobalStyles />
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <Router>
            <App />
          </Router>
          {/* <DevTools /> */}
        </StyledContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default Root;
