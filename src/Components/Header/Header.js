import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logoImage from '../../Images/logo.png';
const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
  justify-content: center;
  height: 50px;
`;

const Logo = styled.div`
  width: 125px;
  height: 50px;
  background-size: cover;
  background-image: url(${logoImage});
  cursor: pointer;
`;

const MenuBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;

  margin-left: auto;
`;

const Menu = styled.div`
  position: relative;
  font-size: 15px;
  color: black;
  margin: 0 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  &:hover {
    color: red;
    &:before {
      width: 100%;
    }
  }

  &:before {
    content: '';
    position: absolute;
    background-color: red;
    height: 2px;
    width: 0;
    bottom: -10px;
    transition: 0.3s;
    left: 0;
  }
`;

export default function Header(props) {
  return (
    <React.Fragment>
      <Container>
        <Logo />
        <MenuBar>
          {/* 스타일 미리 만들어두고 공통으로 적용 */}
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Menu>Main</Menu>
          </Link>
          <Link to={'/profile'} style={{ textDecoration: 'none' }}>
            <Menu>Profile</Menu>
          </Link>
          <Menu onClick={() => window.open('https://github.com/NapolDeveloper')}>Github</Menu>
          <Menu>Album</Menu>
        </MenuBar>
      </Container>
    </React.Fragment>
  );
}
