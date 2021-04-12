import React, { useState } from 'react';
import styled from 'styled-components';

// components
import CardInfo from '../CardInfo/CardInfo';
import Profile from '../../Profile/Profile';

const CardObj = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
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
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-bottom: 30px;
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

export default function Card(props, { handleInfo }) {
  const [isActive, setActive] = useState('off');
  // 다른 카드를 누르면 on, off가 중복되는 현상 존재. 해결방안 찾아야함
  const handleClick = () => {
    setActive(isActive === 'off' ? 'on' : 'off');
    console.log(isActive);
    if (isActive) {
    }
  };
  const { title, des } = props;
  return (
    <React.Fragment>
      <CardObj onClick={handleInfo}>
        {/* CardSlider 에서 받은 props를 CardProfile 스타일 컴포넌트로 props로 다시 전달 */}
        <CardProfile img={props.img}></CardProfile>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{des}</CardDescription>
      </CardObj>
    </React.Fragment>
  );
}
