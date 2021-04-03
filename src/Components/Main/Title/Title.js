import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {};

const defaultProps = {};

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  //   text-transform: uppercase;
  margin-top: 150px; // 이렇게 마진으로 밀어내는게 좋은 방식인지 모르겠음.
  margin-bottom: 15px;
`;
const SubTitle = styled.div`
  font-size: 16px;
  margin-bottom: 25px;
`;

export default function Title(props) {
  return (
    <React.Fragment>
      <TitleContainer>
        <MainTitle>Napol's Dev Blog with React JS</MainTitle>
        <SubTitle>Front-end Development Blog</SubTitle>
      </TitleContainer>
    </React.Fragment>
  );
}

Title.propTypes = propTypes;
Title.defaultProps = defaultProps;
