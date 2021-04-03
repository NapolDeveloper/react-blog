import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';

// modules
import GlobalStyle from './Styles/GlobalStyle';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
const AppStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <React.Fragment>
      <AppStyled>
        <GlobalStyle />
        <Header />
        <Main />
      </AppStyled>
    </React.Fragment>
  );
}

export default App;
