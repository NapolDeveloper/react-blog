import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

// modules
import Title from './Title/Title';
import CardSlider from './CardSlider/CardSlider';
import Charts from './Charts/Charts';
import CardInfo from './CardInfo/CardInfo';
import MainBtn from './MainButton/MainButton';
import GlobalStyle from '../../Styles/GlobalStyle';

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
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

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  /* width: 500px; */
  /* height: 50px; */
`;

const ChartContainer = styled.div`
  display: flex;
  // 정렬은 없애야 할 수도 있음
  align-items: center;
  justify-content: center;

  margin-top: 60px;
`;

const MainButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  /* padding: 20px 0; */
  border-radius: 15px;
  margin: 0 20px;
  background-color: ${(props) => (props.blue ? '#0284FE' : 'white')};
  border: 1px solid ${(props) => (props.blue ? 'none' : '#cccccc')};
  color: ${(props) => (props.blue ? 'white' : '#4d4d4d')};
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: ${(props) => (props.blue ? '#0064c2' : '#ededed')};
  }
`;

const ButtonText = styled.span`
  font-size: 16px;
`;

const propTypes = {};

const defaultProps = {};

const settings = {
  className: 'center',
  centerMode: true,
  infinite: true,
  centerPadding: '60px',
  slidesToShow: 3,
  speed: 500
};
export default function Main(props) {
  function handleClick(e) {
    e.preventDefault();
    // window.open(, '_blank');
    console.log('test');
  }
  return (
    <React.Fragment>
      <GlobalStyle />
      <MainAnimation>
        <Title />
        <MainBtn />
        <CardSlider />
        <ChartContainer>
          <Charts />
        </ChartContainer>
      </MainAnimation>
    </React.Fragment>
  );
}

Main.propTypes = propTypes;
Main.defaultProps = defaultProps;
