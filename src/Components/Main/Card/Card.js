import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import CardInfo from '../CardInfo/CardInfo';

// 1. CardContainer는 Main으로 옮기기.
// 2. Main에서 <Card props->로 내용 전달>

const CardObj = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 300px;
  margin: 30px 20px;
  border-radius: 10px;
  box-shadow: 0px 10px 10px 5px rgba(0, 0, 0, 0.15);
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: translateY(-20px);
  }
`;

const CardProfile = styled.div`
  background-image: url(${(props) => props.profile});
  width: 70px;
  height: 70px;
  background-size: cover;
  border-radius: 50%;
  margin-bottom: 20px;
`;

const CardTitle = styled.div`
  font-size: 24px;
  color: black;
  margin-bottom: 10px;
`;

const CardDescription = styled.div`
  font-size: 12px;
  color: #a3a3a3;
  text-align: center;
`;

const propTypes = {};

const defaultProps = {};

export default function Card(props) {
  return (
    <React.Fragment>
      <CardObj>
        <CardProfile></CardProfile>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.des}</CardDescription>
      </CardObj>
    </React.Fragment>
  );
}

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
