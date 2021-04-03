import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  /* width: 500px; */
  /* height: 50px; */
`;

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

const propTypes = {};

const defaultProps = {};

export default function MainButton(props) {
  return (
    <React.Fragment>
      <BtnContainer>
        <MainBtn blue>
          <BtnText>Get Started Now</BtnText>
        </MainBtn>
        <MainBtn>
          <BtnText>Go Github!</BtnText>
        </MainBtn>
      </BtnContainer>
    </React.Fragment>
  );
}

MainButton.propTypes = propTypes;
MainButton.defaultProps = defaultProps;
