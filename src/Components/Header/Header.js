import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

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

const propTypes = {};

const defaultProps = {};

export default function Header(props) {
  return (
    <React.Fragment>
      <Container>
        <Logo />
        <MenuBar>
          <Menu>Features</Menu>
          <Menu>Github</Menu>
          <Menu>Documentation</Menu>
        </MenuBar>
      </Container>
    </React.Fragment>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
