import React from 'react';
import styled, { keyframes } from 'styled-components';

// modules
import Title from './Title/Title';
import CardSlider from './CardSlider/CardSlider';
import CardInfo from './CardInfo/CardInfo';
import MainBtn from './MainButton/MainButton';
import GlobalStyle from '../../Styles/GlobalStyle';

// styles

export default function Main(props, { handleInfo }) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {/* <PageLoadAnimation> */}
      <Title />
      <MainBtn />
      <CardSlider handleInfo={handleInfo} />
      {/* </PageLoadAnimation> */}
    </React.Fragment>
  );
}
