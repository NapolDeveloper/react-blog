import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';

// modules
import GlobalStyle from './Styles/GlobalStyle';
import Header from './Components/Header/Header';

const AppStyled = styled.div`
  width: 100%;
`;

function App() {
  return (
    <React.Fragment>
      <AppStyled>
        <GlobalStyle />
        <Header />
      </AppStyled>
    </React.Fragment>
  );
}

export default App;
