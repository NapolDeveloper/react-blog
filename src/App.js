import styled, { keyframes } from 'styled-components';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// modules
import GlobalStyle from './Styles/GlobalStyle';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Profile from './Components/Profile/Profile';
const AppStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const MainFadeIn = keyframes`
from
{
  opacity: 0;
}
to{
  opacity: 1;
}
`;
const MainAnimation = styled.div`
  animation: ${MainFadeIn} 2s;
`;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInfoOn: false
    };
  }

  handleInfo = () => {
    const { isInfoOn } = this.state;
    this.setState({
      isInfoOn: isInfoOn ? false : true
    });
    console.log(isInfoOn);
  };
  render() {
    const { handleInfo } = this;
    return (
      <React.Fragment>
        <BrowserRouter>
          <AppStyled>
            <GlobalStyle />
            <Header />
            <Switch>
              <MainAnimation>
                <Route exact path='/' render={() => <Main handleInfo={handleInfo} />} />
                <Route exact path='/profile' component={Profile} />
              </MainAnimation>
            </Switch>
          </AppStyled>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}
