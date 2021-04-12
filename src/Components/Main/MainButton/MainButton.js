import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

// styles
import { SlideUpAnimation } from '../../../Styles/Animation';

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  /* width: 500px; */
  /* height: 50px; */
`;

// div로 만들 경우 브라우저별로 스타일 호환성 다름 - 보완 또는 button으로 제작
const MainBtn = styled.button`
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
const BtnText = styled.span`
  font-size: 16px;
`;

export default function MainButton(props) {
  return (
    <React.Fragment>
      <SlideUpAnimation style={{ animationDelay: '.6s' }}>
        <BtnContainer>
          <Link to={'/profile'} style={{ textDecoration: 'none' }}>
            <MainBtn blue>
              <BtnText>About Me</BtnText>
            </MainBtn>
          </Link>
          <MainBtn
            onClick={() => {
              window.open('https://github.com/NapolDeveloper');
            }}
          >
            <BtnText>Go Github!</BtnText>
          </MainBtn>
        </BtnContainer>
      </SlideUpAnimation>
    </React.Fragment>
  );
}
